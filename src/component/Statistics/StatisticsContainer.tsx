import * as React from "react";
// @ts-ignore
import Statistics from "./Statistics.tsx";
import { connect } from "react-redux";
// @ts-ignore
import { setActiveDay } from "../../store/StatisticsReducer.ts";
// @ts-ignore

import useGetInfoTask from "../../hooks/useGetInfoTask.tsx";

interface IStatisticsContainer {
  optionSelect: number;
  setActiveDay: () => {};
  completedTask: [{}];
  compiltTaskTEST: {};
  activeDay: string;
}

const StatisticsContainer = (props: IStatisticsContainer) => {
  const [tasks, maxTimeTask] = useGetInfoTask(props.compiltTaskTEST);
  return (
    <div>
      {tasks && (
        <Statistics
          setActiveDay={props.setActiveDay}
          tasks={tasks}
          maxTimeTask={maxTimeTask}
          activeDay={props.activeDay}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    optionSelect: state.Statistics.optionSelect,
    completedTask: state.Statistics.completedTask,
    compiltTaskTEST: state.Statistics.compiltTaskTEST,
    activeDay: state.Statistics.activeDay,
  };
};

export default connect(mapStateToProps, { setActiveDay })(StatisticsContainer);
