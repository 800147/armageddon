"use client";

import {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Neo__ from "./Neo.module.css";
import { useRequest } from "@/helpers/hooks/useRequest";
import { INearEarthObject, neo_GET } from "@/app/api/neo/neo_client";
import { InfiniteScrollLoader } from "@/components/InfiniteScrollLoader/InfiniteScrollLoader";
import useStorage from "@/helpers/hooks/useStorage";
import { Asteroid } from "@/components/Asteroid/Asteroid";
import Link from "next/link";
import cn from "classnames";

const formatDate = (date: Date) =>
  `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getUTCDate()).padStart(2, "0")}`;

const Neo: FunctionComponent = () => {
  const [all, setAll] = useState<INearEarthObject[]>([]);
  const [get, neo, error] = useRequest(neo_GET);
  const loadNext = useCallback(() => {
    if (!neo) {
      const startDate = formatDate(new Date());
      const endDate = startDate;

      get(startDate, endDate);

      return;
    }

    const startDate = neo.links.next.match("start_date=([^&]*)&")?.[1];
    const endDate = neo.links.next.match("end_date=([^&]*)&")?.[1];

    if (!startDate || !endDate) {
      return;
    }

    get(startDate, endDate);
  }, [get, neo]);

  useEffect(() => {
    if (!neo) {
      return;
    }

    setAll((oldAll) => [
      ...oldAll,
      ...Object.values(neo.near_earth_objects).flat(),
    ]);
  }, [neo, setAll]);

  const [orderString, setOrder] = useStorage("order");

  const order = useMemo(
    () => JSON.parse(orderString ?? "{}") as Record<string, INearEarthObject>,
    [orderString]
  );
  const addOrder = useCallback(
    (object: INearEarthObject) => {
      setOrder(JSON.stringify({ ...order, [object.id]: object }));
    },
    [order, setOrder]
  );

  const [isLunar, setLunar] = useState(true);
  const toLunar = useCallback(() => setLunar(true), [setLunar]);
  const toKm = useCallback(() => setLunar(false), [setLunar]);

  return (
    <div className={Neo__.Root}>
      <h2 className={Neo__.Title}>Ближайшие подлёты астероидов</h2>
      <Order orderCount={Object.keys(order).length} />
      <div className={Neo__.Swith}>
        <button
          type="button"
          className={cn(
            Neo__.SwitchButton,
            !isLunar && Neo__.SwitchButton_active
          )}
          onClick={toKm}
        >
          в километрах
        </button>
        {" | "}
        <button
          type="button"
          className={cn(
            Neo__.SwitchButton,
            isLunar && Neo__.SwitchButton_active
          )}
          onClick={toLunar}
        >
          в лунных орбитах
        </button>
      </div>
      {all.map((object) => (
        <Asteroid
          key={object.id}
          object={object}
          addOrder={addOrder}
          isLunar={isLunar}
          isOrdered={order[object.id] !== undefined}
        />
      ))}
      {error && <p>ERROR: {error.message}</p>}
      {!error && (
        <>
          <InfiniteScrollLoader key={neo?.links.next} loadFunction={loadNext} />
          <p>Loading...</p>
        </>
      )}
    </div>
  );
};

const Order: FunctionComponent<{ orderCount: number }> = ({ orderCount }) =>
  Boolean(orderCount) && (
    <div className={Neo__.Order}>
      <div>
        <div className={Neo__.OrderTitle}>Корзина</div>
        <div className={Neo__.OrderCount}>{orderCount} астероидов</div>
      </div>
      <Link href="/send" className={Neo__.OrderSend}>
        Отправить
      </Link>
    </div>
  );

export default Neo;
