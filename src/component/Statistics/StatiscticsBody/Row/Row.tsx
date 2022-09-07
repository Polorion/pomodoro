import * as React from "react";
import S from "./../../Statistics.module.scss";

interface iRow {
  time: {
    h: number;
    min: number;
  };
}

const Row = (props: iRow) => {
  return (
    <div className={S.row}>
      <div className={S.line}></div>
      <div className={S.min}>
        {" "}
        {props.time.h > 0 && `${props.time.h} час`} {props.time.min} минут
      </div>
    </div>
  );
};

export default Row;
