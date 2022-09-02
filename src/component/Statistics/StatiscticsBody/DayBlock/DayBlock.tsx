import * as React from "react";
// @ts-ignore
import S from "./../../Statistics.module.scss";

const DayBlock = (props) => {
  console.log(props.activeDay, 111111111111);
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
