import * as React from "react";
// @ts-ignore
import S from "./../../Statistics.module.scss";

const Row = (props) => {
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
