import { FunctionComponent, useCallback, useMemo, useState } from "react";
import Asteroid__ from "./Asteroid.module.css";
import { INearEarthObject } from "@/app/api/neo/neo_client";
import Image from "next/image";
import cn from "classnames";

export const Asteroid: FunctionComponent<{
  isInOrder?: boolean;
  className?: string;
  object: INearEarthObject;
  isLunar?: boolean;
  isOrdered?: boolean;
  addOrder: (object: INearEarthObject) => void;
}> = ({
  object,
  className,
  isLunar = true,
  isOrdered,
  addOrder,
  isInOrder,
}) => {
  const {
    name,
    is_potentially_hazardous_asteroid,
    close_approach_data,
    estimated_diameter: {
      meters: { estimated_diameter_max },
    },
  } = object;
  const {
    close_approach_date,
    miss_distance: { lunar, kilometers },
  } = close_approach_data[0];

  const shortName = useMemo(() => name.match(/\((.*)\)/)?.[1] ?? name, [name]);

  const onOrderClick = useCallback(() => addOrder(object), [addOrder, object]);

  const [fullVisible, setFullVisible] = useState(false);
  const goFull = useCallback(() => setFullVisible(true), [setFullVisible]);
  const closeFull = useCallback(() => setFullVisible(false), [setFullVisible]);

  return (
    <>
      <div className={cn(Asteroid__.Root, className)}>
        <div className={Asteroid__.Date}>{close_approach_date}</div>
        <div className={Asteroid__.Row}>
          <div className={Asteroid__.Distance}>
            <span>
              {isLunar
                ? `${Math.round(Number(lunar))} лунных орбит`
                : `${Math.round(Number(kilometers))} км`}
            </span>
          </div>
          <Image
            className={cn(
              Asteroid__.Image,
              estimated_diameter_max < 100 && Asteroid__.Image_small
            )}
            src="/asteroid.png"
            width={37}
            height={40}
            alt="size view"
          />
          <div className={Asteroid__.Other}>
            <button type="button" className={Asteroid__.Name} onClick={goFull}>
              {shortName}
            </button>
            <div className={Asteroid__.Diameter}>
              Ø {Math.round(estimated_diameter_max)} м
            </div>
          </div>
        </div>
        <div className={Asteroid__.Footer}>
          {!isInOrder &&
            (isOrdered ? (
              <div>В корзине</div>
            ) : (
              <button type="button" onClick={onOrderClick}>
                Заказать
              </button>
            ))}
          {is_potentially_hazardous_asteroid && (
            <div className={Asteroid__.Dangerous}>⚠ Опасен</div>
          )}
        </div>
      </div>
      {fullVisible && (
        <>
          <button className={Asteroid__.FullBack} onClick={closeFull}></button>
          <div className={Asteroid__.Full}>
            <div className={cn(Asteroid__.Root, className)}>
              <div className={Asteroid__.Date}>{close_approach_date}</div>
              <div className={Asteroid__.Row}>
                <div className={Asteroid__.Distance}>
                  <span>
                    {isLunar
                      ? `${Math.round(Number(lunar))} лунных орбит`
                      : `${Math.round(Number(kilometers))} км`}
                  </span>
                </div>
                <Image
                  className={cn(
                    Asteroid__.Image,
                    estimated_diameter_max < 100 && Asteroid__.Image_small
                  )}
                  src="/asteroid.png"
                  width={37}
                  height={40}
                  alt="size view"
                />
                <div className={Asteroid__.Other}>
                  <button
                    type="button"
                    className={Asteroid__.Name}
                    onClick={goFull}
                  >
                    {shortName}
                  </button>
                  <div className={Asteroid__.Diameter}>
                    Ø {Math.round(estimated_diameter_max)} м
                  </div>
                </div>
              </div>
              <div className={Asteroid__.Footer}>
                {isOrdered ? (
                  <div>В корзине</div>
                ) : (
                  <button type="button" onClick={onOrderClick}>
                    Заказать
                  </button>
                )}
                {is_potentially_hazardous_asteroid && (
                  <div className={Asteroid__.Dangerous}>⚠ Опасен</div>
                )}
              </div>
            </div>
            <p>Сближения:</p>
            <ol>
              {close_approach_data.map(
                (
                  {
                    relative_velocity: { kilometers_per_second },
                    miss_distance: { kilometers },
                    close_approach_date_full,
                  },
                  i
                ) => (
                  <li key={i}>
                    <p>{`Скорость относительно земли: ${Math.round(
                      Number(kilometers_per_second)
                    )} км/с`}</p>
                    <p>{`Время максимального сближения с Землёй: ${close_approach_date_full}`}</p>
                    <p>{`расстояние до Земли по орбите вокруг чего летит.: ${Math.round(
                      Number(kilometers)
                    )} км`}</p>
                  </li>
                )
              )}
            </ol>
          </div>
        </>
      )}
    </>
  );
};
