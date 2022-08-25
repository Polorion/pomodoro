import * as React from "react";

const UseGetNameButton = (
  timerIsRun,
  isBreak,
  isPause,
  APITimer,
  timerPause,
  task,
  pressSkipBreak,
  dropDownAPI
) => {
  const startTimer = () => {
    APITimer.startTimer();
    timerPause(task, false);
  };
  const stopTimer = () => {
    APITimer.stopTimer();
    timerPause(task, true);
  };

  const skipBreak = () => {
    pressSkipBreak(task);
    timerPause(task, false);
  };
  const complit = () => {
    dropDownAPI.deleteTask(task);
  };
  const log = () => {
    console.log(1);
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
          title: "Стоп",
          action: stopTimer,
        },
        r: {
          title: "STOP",
          action: log,
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
          title: "STOP",
          action: log,
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
          title: "STOP",
          action: log,
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
          title: "STOP",
          action: log,
        },
      };
    }
  };
  return tremconst();
};

export default UseGetNameButton;
