import * as React from "react";
// @ts-ignore
import S from "./../Statistics.module.scss";
// @ts-ignore
import { ReactComponent as Radius } from "../../../assets/img/radius.svg";
// @ts-ignore
import { ReactComponent as Clock } from "../../../assets/img/clock.svg";
// @ts-ignore
import { ReactComponent as Cancel } from "../../../assets/img/cancel.svg";
// @ts-ignore
import FocusBlock from "./FocusBlock/FocusBlock.tsx";
// @ts-ignore
import PauseBlock from "./PauseBlock/PauseBlock.tsx";
// @ts-ignore
import CancelBlock from "./CancelBlock/CancelBlock.tsx";

const StatiscticsFooter = (props) => {
  const isActive = !!props.activeDay;
  return (
    <div className={S.footer}>
      <FocusBlock
        title={"Фокус"}
        info={props.activeDay.focusWork}
        logo={Radius}
        isActive={isActive}
      />{" "}
      <PauseBlock
        title={"Время на паузе"}
        info={props.activeDay.timeOfPaused}
        logo={Clock}
        isActive={isActive}
      />{" "}
      <CancelBlock
        title={"Остановки"}
        info={props.activeDay.cancel}
        logo={Cancel}
        isActive={isActive}
      />
    </div>
  );
};

export default StatiscticsFooter;
