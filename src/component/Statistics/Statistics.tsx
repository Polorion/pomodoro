import * as React from "react";
import StatisticsHead from "./StatiscticsHead/StatisticsHead.tsx";
import StatisticsBody from "./StatiscticsBody/StatisticsBody.tsx";
import StatisticsFooter from "./StatiscticsFooter/StatisticsFooter.tsx";

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
      <StatisticsHead
        setActiveTask={props.setActiveTask}
        optionSelect={props.optionSelect}
      />
      <StatisticsBody
        nightOrDay={props.nightOrDay}
        tasks={props.tasks}
        maxTimeTask={props.maxTimeTask}
        setActiveDay={props.setActiveDay}
        activeDay={props.activeDay}
      />
      <StatisticsFooter
        activeDay={props.activeDay}
        nightOrDay={props.nightOrDay}
      />
    </div>
  );
};

export default Statistics;
