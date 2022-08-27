import * as React from "react";
// @ts-ignore
import Statistics from "./Statistics.tsx";
import { connect } from "react-redux";
// @ts-ignore
import { setActiveTask } from "../../store/StatisticsReducer.ts";
import GetDataInArray from "../../utils/GetDataInArray";

interface IStatisticsContainer {
  optionSelect: number;
  setActiveTask: () => {};
}

const StatisticsContainer = (props: IStatisticsContainer) => {
  const taskOfWikend = [
    {
      title: "test",
      tomato: 4,
      timeOfPaused: 5,
      timeOfWorking: 51,
      cancel: 2,
    },
    {
      title: "testq",
      tomato: 1,
      timeOfPaused: 0,
      timeOfWorking: 0,
      cancel: 0,
    },
    {
      title: "testw",
      tomato: 7,
      timeOfPaused: 0,
      timeOfWorking: 0,
      cancel: 24,
    },
    {
      title: "teste",
      tomato: 23,
      timeOfPaused: 0,
      timeOfWorking: 0,
      cancel: 9,
    },
  ];

  const infoAllTask = GetDataInArray(taskOfWikend);
  return (
    <div>
      <Statistics
        setActiveTask={props.setActiveTask}
        optionSelect={props.optionSelect}
        infoAllTask={infoAllTask}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    optionSelect: state.Statistics.optionSelect,
  };
};

export default connect(mapStateToProps, { setActiveTask })(StatisticsContainer);
