import * as React from "react";
import S from "./LiItem.module.scss";
interface ILiItem {
  nightOrDay: boolean;
  title: string;
}

const LiItem = (props: ILiItem) => {
  return (
    <li className={`${S.li} ${props.nightOrDay ? S.day : S.night}`}>
      {" "}
      {props.title}
    </li>
  );
};

export default LiItem;
