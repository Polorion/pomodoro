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
import audio from "../../assets/audio/first.mp3";
import { useRef } from "react";
interface IBodyPomodoroContainer {
  isBreak: boolean;
  task: string;
  setDayOrNight: boolean;
  nightOrDay: boolean;
  convertTomatoFromTime: {};
  allTask: [
    {
      presumablyTomato: number;
      id: string;
      time: number;
      tomato: number;
      isBreak: boolean;
      isPause: boolean;
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

  setPreTimeTomato(fromMsToTime1: any): void;

  setBreak(id: string): void;
}

const BodyPomodoroContainer = (props: IBodyPomodoroContainer) => {
  const playSound = (text: string) => {
    // @ts-ignore
    audioRef.current.play();
    console.log(audioRef.current);
    alert(text);
    console.log(audioRef.current, 111);
  };
  const audioRef = useRef(null);

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
      if (viewTask[0].isBreak) {
        props.addMinute(viewTask[0].id, props.settings.workTime);
      } else {
        if (viewTask[0].tomato % 3 === 0 && viewTask[0].tomato !== 0) {
          props.addMinute(viewTask[0].id, props.settings.bigBreakTime);
          playSound("большой перерыв");
        } else {
          props.addMinute(viewTask[0].id, props.settings.breakTime);
          playSound("мленький перерыв");
        }
      }
      props.setBreak(viewTask[0].id);

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
  useGetTimeBottomForm(props.allTask, props.setPreTimeTomato);
  return (
    <>
      <Outlet />
      <audio ref={audioRef} src={audio}></audio>
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
})(BodyPomodoroContainer);
