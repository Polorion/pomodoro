import * as React from "react";
import S from "./../../Statistics.module.scss";
import B from "./FocusBlock.module.scss";

interface IFocusBlock {
  logo: any;
  isActive: boolean;
  title: string;
  info: string;
}

const FocusBlock = (props: IFocusBlock) => {
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
