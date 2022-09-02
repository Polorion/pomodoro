import * as React from "react";
// @ts-ignore
import S from "./Statistics.module.scss";

// @ts-ignore
import StatiscticsHead from "./StatiscticsHead/StatiscticsHead.tsx";
// @ts-ignore
import StatiscticsBody from "./StatiscticsBody/StatiscticsBody.tsx";
// @ts-ignore
import StatiscticsFooter from "./StatiscticsFooter/StatiscticsFooter.tsx";

const Statistics = (props) => {
  return (
    <div className={"container"}>
      <StatiscticsHead
        setActiveTask={props.setActiveTask}
        optionSelect={props.optionSelect}
      />
      <StatiscticsBody
        tasks={props.tasks}
        maxTimeTask={props.maxTimeTask}
        setActiveDay={props.setActiveDay}
        activeDay={props.activeDay}
      />
      <StatiscticsFooter activeDay={props.activeDay} />
    </div>
  );
};

export default Statistics;
