import * as React from "react";

const getNameButton = (
  timerIsRun,
  isBreak,
  isPause,
  APITimer,
  timerPause,
  task,
  pressSkipBreak,
  dropDownAPI,
  addCancelThunk,
  APITimerStop,
  setCreteTask
) => {
  const startTimer = () => {
    APITimer.startTimer();
    APITimerStop.stopTimerPaused();
    timerPause(task, false);
  };
  const stopTimer = () => {
    APITimerStop.startTimerPaused();
    APITimer.stopTimer();
    timerPause(task, true);
  };

  const skipBreak = () => {
    APITimerStop.stopTimerPaused();
    APITimer.stopTimer();
    pressSkipBreak(task);
    timerPause(task, false);
  };
  const complit = () => {
    setCreteTask(task);
    APITimerStop.stopTimerPaused();
    dropDownAPI.deleteTask(task);
  };
  const stop = () => {
    addCancelThunk(task);
    APITimer.stopTimer();
  };
  const tremconst = () => {
    if (!timerIsRun && !isBreak && isPause) {
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
    if (timerIsRun && !isBreak && !isPause) {
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
    if (!timerIsRun && isBreak && !isPause) {
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
    if (timerIsRun && isBreak && !isPause) {
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
    if (!timerIsRun && isBreak && isPause) {
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
    if (!timerIsRun && !isBreak && !isPause) {
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
