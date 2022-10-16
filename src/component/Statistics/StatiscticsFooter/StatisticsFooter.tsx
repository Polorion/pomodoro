import * as React from "react";
import S from "./../Statistics.module.scss";
import { ReactComponent as Radius } from "../../../assets/img/radius.svg";
import { ReactComponent as Clock } from "../../../assets/img/clock.svg";
import { ReactComponent as Cancel } from "../../../assets/img/cancel.svg";
import FocusBlock from "./FocusBlock/FocusBlock.tsx";
import PauseBlock from "./PauseBlock/PauseBlock.tsx";
import CancelBlock from "./CancelBlock/CancelBlock.tsx";

interface IStatisticsFooter {
  activeDay: any;
  nightOrDay: boolean;
}

const StatisticsFooter = (props: IStatisticsFooter) => {
  const isActive = !!props.activeDay;
  return (
    <div className={`${S.footer}  ${props.nightOrDay ? S.day : S.night}`}>
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

export default StatisticsFooter;
