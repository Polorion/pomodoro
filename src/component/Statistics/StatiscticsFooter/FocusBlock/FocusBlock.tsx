import * as React from "react";
// @ts-ignore
import S from "./../../Statistics.module.scss"; // @ts-ignore
import B from "./FocusBlock.module.scss";

const FocusBlock = (props) => {
  return (
    <div className={`${S.footerBlock} ${props.isActive && B.bodyColor}`}>
      <div className={S.left}>
        <h2>{props.title}</h2>
        <div>{props.info ? `${props.info} ` : "0"}%</div>
      </div>
      <div className={`${S.right} ${props.isActive && B.svgColor}`}>
        <props.logo />
      </div>
    </div>
  );
};

export default FocusBlock;
