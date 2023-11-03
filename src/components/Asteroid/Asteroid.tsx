import { FunctionComponent, useCallback, useMemo, useState } from "react";
import Asteroid__ from "./Asteroid.module.css";
import { INearEarthObject } from "@/app/api/neo/neo_client";
import Neo from "@/features/Neo/Neo";

export const Asteroid:FunctionComponent<{isInOrder?: boolean; className?: string, object: INearEarthObject, isLunar?: boolean, isOrdered?: boolean, addOrder: (object: INearEarthObject) => void }> = ({object, className, isLunar = true, isOrdered, addOrder, isInOrder}) => {
  const {name, is_potentially_hazardous_asteroid, close_approach_data, estimated_diameter: {meters: { estimated_diameter_max }}} = object;
  const {close_approach_date, miss_distance: {lunar, kilometers}} = close_approach_data[0];

  const shortName = useMemo(() => name.match(/\((.*)\)/)?.[1] ?? name, [name]);

  const onOrderClick = useCallback(() => addOrder(object), [addOrder, object]);

  return <div className={Asteroid__.Root}>
    <div className={Asteroid__.Date}>{close_approach_date}</div>
    <div className={Asteroid__.Row}>
      <div className={Asteroid__.Distance}><span>
        { isLunar ? `${Math.round(Number(lunar))} лунных орбит` : `${Math.round(Number(kilometers))} км`}
        </span></div>
      <div className={Asteroid__.Image}></div>
      <div className={Asteroid__.Other}>
        <div className={Asteroid__.Name}>
          {shortName}
        </div>
        <div className={Asteroid__.Diameter}>
        Ø {Math.round(estimated_diameter_max)} м
        </div>
      </div>
    </div>
    <div className={Asteroid__.Footer}>
        {!isInOrder &&
      (isOrdered ? <div>В корзине</div> : <button type="button" onClick={onOrderClick}>Заказать</button>)}
      {is_potentially_hazardous_asteroid && <div className={Asteroid__.Dangerous}>⚠ Опасен</div>}
    </div>
  </div>
}