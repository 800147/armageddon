"use client";

import { FunctionComponent, useCallback, useEffect, useMemo, useState } from "react";
import Neo__ from "./Neo.module.css";
import { useRequest } from "@/helpers/hooks/useRequest";
import { INearEarthObject, neo_GET } from "@/app/api/neo/neo_client";
import { InfiniteScrollLoader } from "@/components/InfiniteScrollLoader/InfiniteScrollLoader";
import cn from 'classnames';

const formatDate = (date: Date) => `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, '0')}`;

export const Neo: FunctionComponent<{className?: string}> = ({className}) => {
  const [all, setAll] = useState<INearEarthObject[]>([]);
  const [get, neo, error] = useRequest(neo_GET);

  const today = useMemo(() => new Date(), []);

  const loadNext = useCallback(
    () => {
      if (!neo) {
        const startDate = formatDate(new Date());
        const endDate = startDate;
  
        get(startDate, endDate);

        return;
      }

      const startDate = neo.links.next.match('start_date=([^&]*)&')?.[1];
      const endDate = neo.links.next.match('end_date=([^&]*)&')?.[1];

      if (!startDate || !endDate) {
        return;
      }

      get(startDate, endDate);
    },
    [get, neo, today]
  );

  useEffect(() => {
    if (!neo) {
      return;
    }

    setAll(oldAll => [...oldAll, ...Object.values(neo.near_earth_objects).flat()]);
  }, [neo, setAll]);

  return (
    <div className={cn(Neo__.Root, className)}>
      <h2 className={Neo__.Title}>Ближайшие подлёты астероидов</h2>
      {all.map(object => <Asteroid key={object.id} object={object} />)}
      {error && <p>ERROR: {error.message}</p>}
      {!error && (
        <>
          <InfiniteScrollLoader
            loadFunction={loadNext}
          />
          <p>Loading...</p>
        </>
      )}
    </div>
  );
};

const Asteroid:FunctionComponent<{className?: string, object: INearEarthObject, isLunar?: boolean, isOrdered?: boolean}> = ({object, className, isLunar = false, isOrdered}) => {
  const {id, name, is_potentially_hazardous_asteroid, close_approach_data, estimated_diameter: {meters: { estimated_diameter_max }}} = object;
  const {close_approach_date, miss_distance: {lunar, kilometers}} = close_approach_data[0];

  const shortName = name.match(/\((.*)\)/)?.[1] ?? name;

  return <div className={Neo__.Asteroid}>
    <div className={Neo__.AsteroidDate}>{close_approach_date}</div>
    <div className={Neo__.AsteroidRow}>
      <div className={Neo__.AsteroidDistance}><span>{Math.round(Number(kilometers))} км</span></div>
      <div className={Neo__.AsteroidImage}></div>
      <div className={Neo__.AsteroidOther}>
        <div className={Neo__.AsteroidName}>
          {shortName}
        </div>
        <div className={Neo__.AsteroidDiameter}>
          {Math.round(estimated_diameter_max)} м
        </div>
      </div>
    </div>
    <div className={Neo__.AsteroidFooter}>
      {isOrdered ? <div>В корзине</div> : <button type="button">Заказать</button>}
    </div>
  </div>
}