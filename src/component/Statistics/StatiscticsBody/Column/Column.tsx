import * as React from "react";
// @ts-ignore
import S from "./../../Statistics.module.scss";

const Column = (props) => {
  const onePixel = 2.66;
  const heightColumn = (props.day.allTime.allSec / 60000) * onePixel;

  const activeDay = () => {
    props.setActiveDay(props.day);
  };
  const isActive = () => {
    return props.activeDay.text === props.day.text;
  };

  return (
    <div className={S.columnBody}>
      <div
        className={`${S.column} ${isActive() && S.active}`}
        style={{
          height: `${heightColumn}px`,
        }}
      ></div>
      <div
        onClick={activeDay}
        className={`${S.nameColumn} ${isActive() && S.active}`}
      >
        {props.day.text}
      </div>
    </div>
  );
};

export default Column;
