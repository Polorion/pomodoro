import * as React from "react";
// @ts-ignore
import S from "./PomodoroRight.module.scss";
// @ts-ignore
import MyButton from "../../UI/MyButton/MyButton.tsx";
// @ts-ignore
import { ReactComponent as Add } from "../../../assets/img/add.svg";
import fromMsToTime from "../../../utils/ConverterMsFromTime";
import { useEffect, useState } from "react";

interface IPomodoroRight {
  pomodoroCount: number;
  taskCount: number;
  task: string;
  setTimerThunk: any;
  viewTask: {
    id: string;
    task: string;
    time: number;
  };
  APITimer: {
    startTimer: () => {};
    stopTimer: () => {};
  };
  timerIsRun: boolean;
  addMinute: (id: string) => {};
}

const PomodoroRight = (props: IPomodoroRight) => {
  const { s, min } = fromMsToTime(props.viewTask[0].time);

  return (
    <div className={S.rbody}>
      <header>
        <h3>{props.viewTask[0].task}</h3>
        <div>
          Помидор: <span>{props.viewTask[0].tomato}</span>
        </div>
      </header>
      <body className={S.body}>
        <div className={S.timer}>
          <div>
            <div className={S.time}>
              {" "}
              {min <= 9 ? "0" + min : min} : {s <= 9 ? "0" + s : s}
            </div>
            <div
              className={S.btnAdd}
              onClick={() => {
                props.addMinute(props.viewTask[0].id);
              }}
            >
              <Add className={S.img} />
            </div>
          </div>
          <div className={S.task}>
            задача:<span>{props.taskCount} - </span>
            <div>{props.viewTask[0].task}</div>
          </div>
        </div>
        <div>
          <div className={S.btns}>
            <MyButton
              hendler={
                props.timerIsRun
                  ? props.APITimer.stopTimer
                  : props.APITimer.startTimer
              }
              title={props.timerIsRun ? "Пауза" : "Старт"}
            />
            <MyButton title={"Стоп"} stop={true} />
          </div>
        </div>
      </body>
    </div>
  );
};

export default PomodoroRight;
