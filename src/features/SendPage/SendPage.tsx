"use client";

import { FunctionComponent, useCallback, useEffect, useMemo, useState } from "react";
import SendPage__ from "./SendPage.module.css";
import { INearEarthObject } from "@/app/api/neo/neo_client";
import useStorage from "@/helpers/hooks/useStorage";
import { Asteroid } from "@/components/Asteroid/Asteroid";

const SendPage: FunctionComponent = () => {
  const [orderString, setOrder] = useStorage('order');
  const [firstOrderString] = useState(orderString);

  const order = useMemo(() => JSON.parse(firstOrderString ?? '{}') as Record<string, INearEarthObject>, [firstOrderString]);
  const addOrder = useCallback(() => {}, []);
  useEffect(() => setOrder('[]'), [setOrder]);

  return (
    <div className={SendPage__.Root}>
      <h2 className={SendPage__.Title}>Заказ отправлен!</h2>
      {Object.values(order).map(object => <Asteroid key={object.id} object={object} addOrder={addOrder} isInOrder />)}
    </div>
  );
};

export default SendPage;