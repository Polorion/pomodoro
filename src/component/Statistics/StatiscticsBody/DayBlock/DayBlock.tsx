import * as React from "react";
import S from "./../../Statistics.module.scss";

interface IDayBlock {
  allTime: { h: number; min: number; s: number };
  activeDay: {
    text: string;
  };
}

const DayBlock = (props: IDayBlock) => {
  return (
    <div className={S.days}>
      <div className={S.day}>{props.activeDay && props.activeDay.text}</div>
      <div className={S.dayInfo}>
        Вы работали над задачами в течение{" "}
        {props.activeDay && (
          <div>
            {props.allTime.h > 0 && <span> {props.allTime.h} ч</span>}{" "}
            <span>{props.allTime.min} мин</span>{" "}
            <span>{props.allTime.s} сек</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DayBlock;
