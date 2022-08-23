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
import { addMinute } from "../../store/MainReducer";

interface IBodyPomodoro {
  allTask: string[];
  setTask: any;
  addTask: void;
  setInputValue: any;
  setActiveTaskThunk: any;
  inputValue: string;
  activeTask: string;
  setTimerThunk: any;
  viewTask: {
    id: string;
    task: string;
  };
  APITimer: {
    startTimer: () => {};
    stopTimer: () => {};
  };
  timerIsRun: boolean;
  dropDownAPI: {};
  addMinute: () => {};
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
      />
      {props.activeTask && (
        <PomodoroRight
          addMinute={props.addMinute}
          taskCount={10}
          viewTask={props.viewTask}
          APITimer={props.APITimer}
          timerIsRun={props.timerIsRun}
        />
      )}
    </div>
  );
};

export default BodyPomodoro;
