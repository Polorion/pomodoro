import * as React from "react";
// @ts-ignore
import BodyPomodoro from "./BodyPomodoro.tsx";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  addMinute,
  addTomato,
  deleteTask,
  deleteTaskThynk,
  pressSkipBreak,
  setActiveTaskThunk,
  setBreakThunk,
  setCountItem,
  setInputValue,
  setTask,
  setTimerThunk,
  subTomato,
  timerPause,
  timerRun,
  // @ts-ignore
} from "../../store/MainReducer.ts";
import { useEffect, useState } from "react";
// @ts-ignore
import useInterval from "../../hooks/useInterval.tsx";
// @ts-ignore
import useSetActiveTask from "../../hooks/useSetActiveTask.tsx";

interface IBodyPomodoroContainer {
  allTask: [
    {
      id: string;
      time: number;
      tomato: number;
      isBreak: boolean;
    }
  ];
  setTask: any;
  setInputValue: any;
  setActiveTaskThunk: any;
  setTimerThunk: any;
  inputValue: string;
  activeTask: string;
  timerRun: (done: boolean) => {};
  timerIsRun: boolean;
  addTomato: (id: string) => {};
  subTomato: (id: string) => {};
  deleteTask: () => {};
  addMinute: () => {};
  addTest: (test: string) => {};
  timerPause: () => {};
  setCountItem: (count: number, id: string) => {};
  setBreakThunk: (task: string, tomato: number, isBreak: boolean) => {};
  pressSkipBreak: (task: string) => {};
}

const BodyPomodoroContainer = (props: IBodyPomodoroContainer) => {
  const viewTask = props.allTask.filter((el) => {
    if (el.id === props.activeTask) {
      return el;
    }
  });

  const setTimer = () => {
    if (viewTask[0].time > 1000) {
      props.setTimerThunk(viewTask[0].id);
    } else {
      if (viewTask[0].time !== 0) {
        props.setTimerThunk(viewTask[0].id);
      }
      props.timerRun(false);
      stopTimer();
      props.setBreakThunk(
        viewTask[0].id,
        viewTask[0].tomato + 1,
        viewTask[0].isBreak
      );
      if (!viewTask[0].isBreak) {
        props.addTomato(viewTask[0].id);
      }
    }
  };
  const [startTimer, stopTimer] = useInterval(
    setTimer,
    1000,
    props.timerRun,
    viewTask[0]
  );
  useSetActiveTask(props.allTask, props.setActiveTaskThunk);

  return (
    <>
      <Outlet />
      <BodyPomodoro
        pressSkipBreak={props.pressSkipBreak}
        setCountItem={props.setCountItem}
        timerPause={props.timerPause}
        addMinute={props.addMinute}
        allTask={props.allTask}
        addTask={props.setTask}
        inputValue={props.inputValue}
        setInputValue={props.setInputValue}
        activeTask={props.activeTask}
        viewTask={viewTask}
        APITimer={{ startTimer, stopTimer }}
        timerIsRun={props.timerIsRun}
        setActiveTaskThunk={props.setActiveTaskThunk}
        dropDownAPI={{
          addTomato: props.addTomato,
          subTomato: props.subTomato,
          deleteTask: props.deleteTask,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allTask: state.MainPage.allTask,
    inputValue: state.MainPage.inputValue,
    activeTask: state.MainPage.activeTask,
    timerIsRun: state.MainPage.timerIsRun,
    test: state.MainPage.test,
  };
};
export default connect(mapStateToProps, {
  setTask,
  setInputValue,
  setActiveTaskThunk,
  setTimerThunk,
  timerRun,
  addTomato,
  subTomato,
  addMinute,
  timerPause,
  setCountItem,
  setBreakThunk,
  deleteTask,

  pressSkipBreak,
})(BodyPomodoroContainer);
