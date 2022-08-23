import * as React from "react";
// @ts-ignore
import BodyPomodoro from "./BodyPomodoro.tsx";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  addMinute,
  addTomato,
  deleteTask,
  setActiveTaskThunk,
  setInputValue,
  setTask,
  setTimerThunk,
  subTomato,
  timerRun,
  // @ts-ignore
} from "../../store/MainReducer.ts";
import { useEffect, useState } from "react";

interface IBodyPomodoroContainer {
  allTask: [
    {
      id: string;
      time: number;
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
}

const BodyPomodoroContainer = (props: IBodyPomodoroContainer) => {
  useEffect(() => {
    props.allTask.length > 0 && props.setActiveTaskThunk(props.allTask[0].id);
  }, [props.allTask.length]);

  const viewTask = props.allTask.filter((el) => {
    if (el.id === props.activeTask) {
      return el;
    }
  });

  const [interval, setIntervals] = useState();

  const setTimer = () => {
    props.setTimerThunk(viewTask[0].id);
  };
  const startTimer = () => {
    props.timerRun(true);
    // @ts-ignore
    setIntervals(setInterval(setTimer, 1000));
  };

  const stopTimer = () => {
    props.timerRun(false);
    clearInterval(interval);
  };

  return (
    <>
      <Outlet />
      <BodyPomodoro
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
  deleteTask,
  addMinute,
})(BodyPomodoroContainer);
