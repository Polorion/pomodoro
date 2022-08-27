import * as React from "react";
// @ts-ignore
import S from "./../../Statistics.module.scss";

const Row = (props) => {
  return (
    <div className={S.row}>
      <div className={S.line}></div>
      <div className={S.min}>{props.time} минут</div>
    </div>
  );
};

export default Row;
