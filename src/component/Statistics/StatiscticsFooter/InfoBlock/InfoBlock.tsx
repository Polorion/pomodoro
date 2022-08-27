import * as React from "react";
// @ts-ignore
import S from "./../../Statistics.module.scss";
// @ts-ignore
import { ReactComponent as Radius } from "../../../../assets/img/radius.svg";

const InfoBlock = (props) => {
  return (
    <div className={S.footerBlock}>
      <div className={S.left}>
        <h2>{props.title}</h2>
        <div>{props.info}</div>
      </div>
      <div className={S.right}>
        <props.logo />
      </div>
    </div>
  );
};

export default InfoBlock;
