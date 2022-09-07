import * as React from "react";
import Statistics from "./Statistics.tsx";
import { connect } from "react-redux";
import { setActiveDay } from "../../store/StatisticsReducer.ts";

import useGetInfoTask from "../../hooks/useGetInfoTask.tsx";
import useAppDayOrNight from "../../hooks/useAppDayOrNight.tsx";

interface IStatisticsContainer {
  setDayOrNight: () => {};
  nightOrDay: boolean;
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
          nightOrDay={props.nightOrDay}
          setActiveDay={props.setActiveDay}
          tasks={tasks}
          maxTimeTask={maxTimeTask}
          activeDay={props.activeDay}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    optionSelect: state.Statistics.optionSelect,
    completedTask: state.Statistics.completedTask,
    compiltTaskTEST: state.Statistics.compiltTaskTEST,
    activeDay: state.Statistics.activeDay,
    nightOrDay: state.MainPage.nightOrDay,
  };
};

export default connect(mapStateToProps, { setActiveDay })(StatisticsContainer);
