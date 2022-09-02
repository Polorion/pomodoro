import * as React from "react";
// @ts-ignore
import S from "./BodyPomodoro.module.scss";
// @ts-ignore
import LiItem from "../UI/LiItem/LiItem.tsx";
// @ts-ignore
import MyButton from "../UI/MyButton/MyButton.tsx";
// @ts-ignore
import PomodoroRight from "./PomodoroRight/PomodoroRight.tsx";
// @ts-ignore
import PomodoroLeft from "./PomodoroLeft/PomodoroLeft.tsx";
import { addCancelThunk } from "../../store/MainReducer";
import getNowDay from "../../utils/getNowDay";

interface IBodyPomodoro {
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
}

const BodyPomodoro = (props: IBodyPomodoro) => {
  return (
    <div className={`container ${S.containerPomodoro}`}>
      <PomodoroLeft
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
