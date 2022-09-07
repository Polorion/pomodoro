import * as React from "react";
import S from "./../../Statistics.module.scss";
import B from "./PausedBlock.module.scss";

interface IPauseBlock {
  logo: any;
  isActive: boolean;
  title: string;
  info: {
    h: number;
    min: number;
    s: number;
  };
}

const PauseBlock = (props: IPauseBlock) => {
  return (
    <div className={`${S.footerBlock} ${props.isActive && B.bodyColor}`}>
      <div className={S.left}>
        <h2>{props.title}</h2>
        {props.info ? (
          <div className={S.info}>
            {props.info.h > 0 && <span> {props.info.h}ч</span>}{" "}
            <span>{props.info.min}м</span> <span>{props.info.s}с</span>
          </div>
        ) : (
          <div>0м</div>
        )}
      </div>
      <div className={`${S.right} ${props.isActive && B.svgColor}`}>
        <props.logo />
      </div>
    </div>
  );
};

export default PauseBlock;
