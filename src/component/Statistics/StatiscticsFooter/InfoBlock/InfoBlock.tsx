import * as React from "react";
import S from "./../../Statistics.module.scss";
import { ReactComponent as Radius } from "../../../../assets/img/radius.svg";

interface IInfoBlock {
  title: string;
  info: string;
  logo: any;
}

const InfoBlock = (props: IInfoBlock) => {
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
