import { FunctionComponent, useCallback, useMemo, useState } from "react";
import Asteroid__ from "./Asteroid.module.css";
import { INearEarthObject } from "@/app/api/neo/neo_client";
import cn from 'classnames';

export const Asteroid:FunctionComponent<{className?: string, object: INearEarthObject, isLunar?: boolean, isOrdered?: boolean, addOrder: (object: INearEarthObject) => void }> = ({object, className, isLunar = false, isOrdered, addOrder}) => {
  const {id, name, is_potentially_hazardous_asteroid, close_approach_data, estimated_diameter: {meters: { estimated_diameter_max }}} = object;
  const {close_approach_date, miss_distance: {lunar, kilometers}} = close_approach_data[0];

  const shortName = useMemo(() => name.match(/\((.*)\)/)?.[1] ?? name, [name]);

  const onOrderClick = useCallback(() => addOrder(object), [addOrder, object]);

  return <div className={Asteroid__.Root}>
    <div className={Asteroid__.Date}>{close_approach_date}</div>
    <div className={Asteroid__.Row}>
      <div className={Asteroid__.Distance}><span>{Math.round(Number(kilometers))} км</span></div>
      <div className={Asteroid__.Image}></div>
      <div className={Asteroid__.Other}>
        <div className={Asteroid__.Name}>
          {shortName}
        </div>
        <div className={Asteroid__.Diameter}>
          {Math.round(estimated_diameter_max)} м
        </div>
      </div>
    </div>
    <div className={Asteroid__.Footer}>
      {isOrdered ? <div>В корзине</div> : <button type="button" onClick={onOrderClick}>Заказать</button>}
    </div>
  </div>
}