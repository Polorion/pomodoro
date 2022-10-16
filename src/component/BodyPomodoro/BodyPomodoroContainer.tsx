import * as React from "react";
import BodyPomodoro from "./BodyPomodoro.tsx";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import {
  addMinute,
  addTomato,
  deleteTask,
  pressSkipBreak,
  setActiveTaskThunk,
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
  setBreak,
} from "../../store/MainReducer.ts";
import useInterval from "../../hooks/useInterval.tsx";
import useSetActiveTask from "../../hooks/useSetActiveTask.tsx";
import { setCreteTask } from "../../store/StatisticsReducer.ts";
import getNowDay from "../../utils/getNowDay.ts";
import transormTaskForStatistic from "../../utils/transormTaskForStatistic";
import useGetTimeBottomForm from "../../hooks/useGetTimeBottomForm.tsx";
import SongPlay from "../../HOK/SongPlay";
import ViewTask from "../../HOK/ViewTask";
export interface IBodyPomodoroContainer {
  isBreak: boolean;
  task: string;
  setDayOrNight: boolean;
  nightOrDay: boolean;
  convertTomatoFromTime: { h: number; min: number };
  allTask: [
    {
      presumablyTomato: number;
      id: string;
      time: number;
      tomato: number;
      isBreak: boolean;
      isPause: boolean;
      task: any;
      settings: {
        workTime: number;
        breakTime: number;
        bigBreakTime: number;
      };
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
  addMinute: (q: string, d: number) => {};
  setTimerInterval: () => {};
  setCreteTask: (day: string, task: {}) => {};
  addTest: (test: string) => {};
  timerPause: () => {};
  setCountItem: (count: number, id: string) => {};
  pressSkipBreak: (task: string) => {};
  addSecondPaused: (task: string) => {};
  addCancelThunk: any;
  intervalPaused: string;
  intervalGo: string;
  settings: {
    workTime: number;
    breakTime: number;
    bigBreakTime: number;
  };
  playSound: any;
  viewTask: any;

  setPreTimeTomato(fromMsToTime1: any): void;

  setBreak(id: string): void;
}

const BodyPomodoroContainer = (props: IBodyPomodoroContainer) => {
  useSetActiveTask(props.allTask, props.setActiveTaskThunk);

  const setTimer = () => {
    if (props.viewTask.time > 1000) {
      props.setTimerThunk(props.viewTask.id);
    } else {
      if (props.viewTask.time !== 0) {
        props.setTimerThunk(props.viewTask.id);
      }
      props.timerRun(false);
      stopTimer();
      if (props.viewTask.isBreak) {
        props.addMinute(props.viewTask.id, props.settings.workTime);
      } else {
        if (props.viewTask.tomato % 3 === 0 && props.viewTask.tomato !== 0) {
          props.addMinute(props.viewTask.id, props.settings.bigBreakTime);
          props.playSound("большой перерыв");
        } else {
          props.addMinute(props.viewTask.id, props.settings.breakTime);
          props.playSound("мленький перерыв");
        }
      }
      props.setBreak(props.viewTask.id);

      if (props.viewTask.presumablyTomato > 0) {
        props.setPreTomato(props.viewTask.id);
      }
      if (!props.viewTask.isBreak) {
        props.addTomato(props.viewTask.id);
      }
    }
    if (props.viewTask.isBreak) {
      props.addSecondPaused(props.viewTask.id);
    }
  };
  const [startTimer, stopTimer] = useInterval(
    props.setTimerInterval,
    props.intervalGo,
    "intervalGo",
    setTimer,
    1000,
    props.viewTask,
    props.timerRun
  );

  const pausedTick = () => {
    props.addSecondPaused(props.viewTask.id);
  };

  const [startTimerPaused, stopTimerPaused] = useInterval(
    props.setTimerInterval,
    props.intervalPaused,
    "intervalPaused",
    pausedTick,
    1000,
    props.viewTask
  );

  const creatTask = () => {
    const task = props.allTask.map((el) => {
      if (el.id === props.activeTask) return el;
    });
    props.setCreteTask(getNowDay(), transormTaskForStatistic(task[0]));
  };
  useGetTimeBottomForm(props.allTask, props.setPreTimeTomato);
  return (
    <>
      <Outlet />

      <BodyPomodoro
        settings={props.settings}
        nightOrDay={props.nightOrDay}
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
        APITimer={{ startTimer, stopTimer, startTimerPaused, stopTimerPaused }}
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

const mapStateToProps = (state: any) => {
  return {
    allTask: state.MainPage.allTask,
    inputValue: state.MainPage.inputValue,
    activeTask: state.MainPage.activeTask,
    timerIsRun: state.MainPage.timerIsRun,
    intervalPaused: state.MainPage.intervalPaused,
    intervalGo: state.MainPage.intervalGo,
    convertTomatoFromTime: state.MainPage.convertTomatoFromTime,
    nightOrDay: state.MainPage.nightOrDay,
    settings: state.Statistics.settings,
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
  deleteTask,
  addSecondPaused,
  addCancelThunk,
  pressSkipBreak,
  setTimerInterval,
  setCreteTask,
  setPreTomato,
  setPreTimeTomato,
  setBreak,
})(ViewTask(SongPlay(BodyPomodoroContainer)));
