import * as React from "react";
// @ts-ignore
import BodyPomodoro from "./BodyPomodoro.tsx";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import fromMsToTime from "../../utils/ConverterMsFromTime";
import {
  addMinute,
  addTomato,
  deleteTask,
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
  addSecondPaused,
  addCancelThunk,
  setTimerInterval,
  setPreTomato,
  setPreTimeTomato,
  // @ts-ignore
} from "../../store/MainReducer.ts";
// @ts-ignore
import useInterval from "../../hooks/useInterval.tsx";
// @ts-ignore
import useSetActiveTask from "../../hooks/useSetActiveTask.tsx";
// @ts-ignore
import { setCreteTask } from "../../store/StatisticsReducer.ts";
import getNowDay from "../../utils/getNowDay";
// @ts-ignore
import transormTaskForStatistic from "../../utils/transormTaskForStatistic";
import { useEffect, useState } from "react";

interface IBodyPomodoroContainer {
  convertTomatoFromTime: {};
  allTask: [
    {
      presumablyTomato: number;
      id: string;
      time: number;
      tomato: number;
      isBreak: boolean;
      isPause: boolean;
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
  setPreTomato: (id: string) => {};
  deleteTask: () => {};
  addMinute: () => {};
  setTimerInterval: () => {};
  setCreteTask: (day: string, task: {}) => {};
  addTest: (test: string) => {};
  timerPause: () => {};
  setCountItem: (count: number, id: string) => {};
  setBreakThunk: (task: string, tomato: number, isBreak: boolean) => {};
  pressSkipBreak: (task: string) => {};
  addSecondPaused: (task: string) => {};
  addCancelThunk: any;
  intervalPaused: string;
  intervalGo: string;

  setPreTimeTomato(fromMsToTime1: any): void;
}

const BodyPomodoroContainer = (props: IBodyPomodoroContainer) => {
  const viewTask = props.allTask.filter((el) => {
    if (el.id === props.activeTask) {
      return el;
    }
  });
  useSetActiveTask(props.allTask, props.setActiveTaskThunk);

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
      if (viewTask[0].presumablyTomato > 0) {
        props.setPreTomato(viewTask[0].id);
      }
      if (!viewTask[0].isBreak) {
        props.addTomato(viewTask[0].id);
      }
    }
    if (viewTask[0].isBreak) {
      props.addSecondPaused(viewTask[0].id);
    }
  };
  const [startTimer, stopTimer] = useInterval(
    props.setTimerInterval,
    props.intervalGo,
    "intervalGo",
    setTimer,
    1000,
    viewTask[0],
    props.timerRun
  );

  const pausedTick = () => {
    props.addSecondPaused(viewTask[0].id);
  };

  const [startTimerPaused, stopTimerPaused] = useInterval(
    props.setTimerInterval,
    props.intervalPaused,
    "intervalPaused",
    pausedTick,
    1000,
    viewTask[0]
  );

  const creatTask = () => {
    const task = props.allTask.map((el) => {
      if (el.id === props.activeTask) return el;
    });
    props.setCreteTask(getNowDay(), transormTaskForStatistic(task[0]));
  };

  useEffect(() => {
    const allTimeWork = () => {
      const timeOfWorking = props.allTask.reduce((el, item) => {
        return el + item.presumablyTomato;
      }, 0);
      props.setPreTimeTomato(fromMsToTime(timeOfWorking * 15 * 60000));
    };

    allTimeWork();
  }, [props.allTask]);
  return (
    <>
      <Outlet />
      <BodyPomodoro
        convertTomatoFromTime={props.convertTomatoFromTime}
        setCreteTask={creatTask}
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
        APITimerStop={{ startTimerPaused, stopTimerPaused }}
        timerIsRun={props.timerIsRun}
        setActiveTaskThunk={props.setActiveTaskThunk}
        addCancelThunk={props.addCancelThunk}
        dropDownAPI={{
          setPreTomato: props.setPreTomato,
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
    intervalPaused: state.MainPage.intervalPaused,
    intervalGo: state.MainPage.intervalGo,
    convertTomatoFromTime: state.MainPage.convertTomatoFromTime,
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
  addSecondPaused,
  addCancelThunk,
  pressSkipBreak,
  setTimerInterval,
  setCreteTask,
  setPreTomato,
  setPreTimeTomato,
})(BodyPomodoroContainer);
