import * as React from "react";
// @ts-ignore
import S from "./../../Statistics.module.scss";
// @ts-ignore
import { ReactComponent as Tomato } from "../../../../assets/img/tomato.svg";
// @ts-ignore
import { ReactComponent as ActiveTomato } from "../../../../assets/img/logo.svg";

const TomatoBlock = (props) => {
  return (
    <div className={S.tomato}>
      {!props.activeDay ? (
        <Tomato width="108" height="102" />
      ) : (
        <div className={S.activeTomato}>
          <ActiveTomato width="72" height="72" /> <span>x</span>
          <span>{props.activeDay.tomato}</span>
        </div>
      )}
      <div className={`${props.activeDay ? S.tomatoFooter : S.transorent}`}>
        <span>{props.activeDay.tomato}</span>
        Помидор
      </div>
    </div>
  );
};

export default TomatoBlock;
