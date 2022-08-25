import * as React from "react";
// @ts-ignore
import S from "./PomodoroRight.module.scss";
// @ts-ignore
import MyButton from "../../UI/MyButton/MyButton.tsx";
// @ts-ignore
import { ReactComponent as Add } from "../../../assets/img/add.svg";
import fromMsToTime from "../../../utils/ConverterMsFromTime";
import { useEffect, useState } from "react";
import { pressSkipBreak, timerPause } from "../../../store/MainReducer";
// @ts-ignore
import useGetNameButton from "../../../hooks/useGetNameButton.tsx";

interface IPomodoroRight {
  dropDownAPI: {
    deleteTask: (i: string) => {};
  };
  pomodoroCount: number;
  taskCount: number;
  task: string;
  setTimerThunk: any;
  viewTask: {
    id: string;
    task: string;
    time: number;
    isPause: boolean;
  };
  APITimer: {
    startTimer: () => {};
    stopTimer: () => {};
  };
  timerPause: (task: string, done: boolean) => {};
  timerIsRun: boolean;
  addMinute: (id: string) => {};
  pressSkipBreak: (id: string) => {};
}

const PomodoroRight = (props: IPomodoroRight) => {
  const btnactions = useGetNameButton(
    props.timerIsRun,
    props.viewTask[0].isBreak,
    props.viewTask[0].isPause,
    props.APITimer,
    props.timerPause,
    props.viewTask[0].id,
    props.pressSkipBreak,
    props.dropDownAPI
  );

  const color = `${props.viewTask[0].isBreak ? S.color_green : S.color_red}  ${
    !props.timerIsRun && S.none
  }`;
  const { s, min } = fromMsToTime(props.viewTask[0].time);
  return (
    btnactions && (
      <div className={S.rbody}>
        <header className={`${S.header} ${color} `}>
          <h3>{props.viewTask[0].task}</h3>
          <div>
            Помидор: <span>{props.viewTask[0].tomato}</span>
          </div>
        </header>
        <body className={S.body}>
          <div className={S.timer}>
            <div>
              <div className={`${S.time} ${color}`}>
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
              задача:<span>{props.viewTask[0].count} - </span>
              <div>{props.viewTask[0].task}</div>
            </div>
          </div>
          <div>
            <div className={S.btns}>
              <MyButton
                hendler={btnactions.l.action}
                title={btnactions.l.title}
              />
              <MyButton
                hendler={btnactions.r.action}
                title={btnactions.r.title}
                stop={true}
              />
            </div>
          </div>
        </body>
      </div>
    )
  );
};

export default PomodoroRight;
