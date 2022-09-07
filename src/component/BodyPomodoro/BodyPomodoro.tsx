import * as React from "react";
import S from "./BodyPomodoro.module.scss";

import PomodoroRight from "./PomodoroRight/PomodoroRight.tsx";
import PomodoroLeft from "./PomodoroLeft/PomodoroLeft.tsx";

interface IBodyPomodoro {
  nightOrDay: boolean;
  convertTomatoFromTime: {};
  allTask: string[];
  setTask: any;
  addTask: void;
  setInputValue: any;
  setActiveTaskThunk: any;
  inputValue: string;
  activeTask: string;
  setTimerThunk: any;
  addCancelThunk: any;
  viewTask: {
    id: string;
    task: string;
  };
  APITimer: {
    startTimer: () => {};
    stopTimer: () => {};
  };
  APITimerStop: {
    startTimer: () => {};
    stopTimer: () => {};
  };
  timerIsRun: boolean;
  dropDownAPI: {};
  addMinute: () => {};
  setCreteTask: () => {};
  timerPause: () => {};
  setCountItem: (count: number, id: string) => {};
  pressSkipBreak: () => {};
  settings: {
    workTime: number;
    breakTime: number;
    bigBreakTime: number;
  };
}

const BodyPomodoro = (props: IBodyPomodoro) => {
  return (
    <div
      className={`container ${S.containerPomodoro} ${
        props.nightOrDay ? S.day : S.night
      } `}
    >
      <PomodoroLeft
        settings={props.settings}
        nightOrDay={props.nightOrDay}
        allTask={props.allTask}
        addTask={props.addTask}
        inputValue={props.inputValue}
        setInputValue={props.setInputValue}
        setActiveTaskThunk={props.setActiveTaskThunk}
        activeTask={props.activeTask}
        stopTimer={props.APITimer.stopTimer}
        dropDownAPI={props.dropDownAPI}
        setCountItem={props.setCountItem}
        convertTomatoFromTime={props.convertTomatoFromTime}
      />
      {props.activeTask && (
        <PomodoroRight
          settings={props.settings}
          nightOrDay={props.nightOrDay}
          addCancelThunk={props.addCancelThunk}
          setCreteTask={props.setCreteTask}
          dropDownAPI={props.dropDownAPI}
          addMinute={props.addMinute}
          pressSkipBreak={props.pressSkipBreak}
          viewTask={props.viewTask}
          APITimer={props.APITimer}
          APITimerStop={props.APITimerStop}
          timerIsRun={props.timerIsRun}
          timerPause={props.timerPause}
        />
      )}
    </div>
  );
};

export default BodyPomodoro;
