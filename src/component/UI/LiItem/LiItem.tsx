import * as React from "react";
// @ts-ignore
import S from "./LiItem.module.scss";
interface ILiItem {
  title: string;
}

const LiItem = (props: ILiItem) => {
  return <li className={S.li}> {props.title}</li>;
};

export default LiItem;
