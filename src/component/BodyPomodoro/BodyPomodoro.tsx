import * as React from "react";
import S from "./BodyPomodoro.module.scss";

import PomodoroRight from "./PomodoroRight/PomodoroRight.tsx";
import PomodoroLeft from "./PomodoroLeft/PomodoroLeft.tsx";
import NightOrDay from "../../HOK/NightOrDay";
import { IBodyPomodoroContainer } from "./BodyPomodoroContainer";

export interface IBodyPomodoro extends IBodyPomodoroContainer {
  APITimer: {
    stopTimer: () => {};
    startTimer: () => {};

    startTimerPaused: () => {};
    stopTimerPaused: () => {};
  };
  dropDownAPI: {};
  timerPauseOrRun: {
    timerPause: () => {};
    timerIsRun: () => {};
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
        allTask={props.allTask}
        addTask={props.setTask}
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
          addCancelThunk={props.addCancelThunk}
          setCreteTask={props.setCreteTask}
          dropDownAPI={props.dropDownAPI}
          viewTask={props.viewTask}
          APITimer={props.APITimer}
          timerPauseOrRun={props.timerPauseOrRun}
        />
      )}
    </div>
  );
};

export default NightOrDay(BodyPomodoro);
