import * as React from "react";
import S from "./Statistics.module.scss";

import StatiscticsHead from "./StatiscticsHead/StatiscticsHead.tsx";
import StatiscticsBody from "./StatiscticsBody/StatiscticsBody.tsx";
import StatiscticsFooter from "./StatiscticsFooter/StatiscticsFooter.tsx";

interface IStatistics {
  activeDay: string;
  setActiveDay: () => {};
  maxTimeTask: {};
  tasks: [{}];
  nightOrDay: boolean;
  setActiveTask: () => {};
  optionSelect: string;
}

const Statistics = (props: IStatistics) => {
  return (
    <div className={"container"}>
      <StatiscticsHead
        setActiveTask={props.setActiveTask}
        optionSelect={props.optionSelect}
      />
      <StatiscticsBody
        nightOrDay={props.nightOrDay}
        tasks={props.tasks}
        maxTimeTask={props.maxTimeTask}
        setActiveDay={props.setActiveDay}
        activeDay={props.activeDay}
      />
      <StatiscticsFooter
        activeDay={props.activeDay}
        nightOrDay={props.nightOrDay}
      />
    </div>
  );
};

export default Statistics;
