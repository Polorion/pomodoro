import * as React from "react";

const getNameButton = (
  timerPauseOrRun: any,
  isBreak: any,
  isPause: any,
  APITimer: any,
  task: any,
  pressSkipBreak: any,
  dropDownAPI: any,
  addCancelThunk: any,
  setCreteTask: any,
  settings: {
    workTime: number;
    breakTime: number;
    bigBreakTime: number;
  }
) => {
  const startTimer = () => {
    APITimer.startTimer();
    APITimer.stopTimerPaused();
    timerPauseOrRun.timerPause(task, false);
  };
  const stopTimer = () => {
    APITimer.startTimerPaused();
    APITimer.stopTimer();
    timerPauseOrRun.timerPause(task, true);
  };

  const skipBreak = () => {
    APITimer.stopTimerPaused();
    APITimer.stopTimer();
    pressSkipBreak(task, settings.workTime);
    timerPauseOrRun.timerPause(task, false);
  };
  const complit = () => {
    setCreteTask(task);
    APITimer.stopTimerPaused();
    dropDownAPI.deleteTask(task);
  };
  const stop = () => {
    addCancelThunk(task, settings.workTime);
    APITimer.stopTimer();
  };
  const tremconst = () => {
    if (!timerPauseOrRun.timerIsRun && !isBreak && isPause) {
      return {
        l: {
          title: "Продолжить",
          action: startTimer,
        },
        r: {
          title: "Сделано",
          action: complit,
        },
      };
    }
    if (timerPauseOrRun.timerIsRun && !isBreak && !isPause) {
      return {
        l: {
          title: "Пауза",
          action: stopTimer,
        },
        r: {
          title: "Стоп",
          action: stop,
        },
      };
    }
    if (!timerPauseOrRun.timerIsRun && isBreak && !isPause) {
      return {
        l: {
          title: "Старт",
          action: startTimer,
        },
        r: {
          title: "Стоп",
          disabled: true,
        },
      };
    }
    if (timerPauseOrRun.timerIsRun && isBreak && !isPause) {
      return {
        l: {
          title: "Пауза",
          action: stopTimer,
        },
        r: {
          title: "Пропустить",
          action: skipBreak,
        },
      };
    }
    if (!timerPauseOrRun.timerIsRun && isBreak && isPause) {
      return {
        l: {
          title: "Продолжить",
          action: startTimer,
        },
        r: {
          title: "Пропустить",
          action: skipBreak,
        },
      };
    }
    if (!timerPauseOrRun.timerIsRun && !isBreak && !isPause) {
      return {
        l: {
          title: "Старт",
          action: startTimer,
        },
        r: {
          title: "Стоп",
          disabled: true,
        },
      };
    }
  };
  return tremconst();
};

export default getNameButton;
