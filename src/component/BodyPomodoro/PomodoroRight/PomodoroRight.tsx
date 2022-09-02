import * as React from "react";
// @ts-ignore
import S from "./PomodoroRight.module.scss";
// @ts-ignore
import MyButton from "../../UI/MyButton/MyButton.tsx";
// @ts-ignore
import { ReactComponent as Add } from "../../../assets/img/add.svg";
import fromMsToTime from "../../../utils/ConverterMsFromTime";

// @ts-ignore
import useGetNameButton from "../../../utils/getNameButton.tsx";

interface IPomodoroRight {
  dropDownAPI: {
    deleteTask: (i: string) => {};
  };
  pomodoroCount: number;
  taskCount: number;
  task: string;
  setTimerThunk: any;
  addCancelThunk: any;
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
  APITimerStop: {
    startTimer: () => {};
    stopTimer: () => {};
  };
  setCreteTask: () => {};
  timerPause: (task: string, done: boolean) => {};
  timerIsRun: boolean;
  addMinute: (id: string) => {};
  pressSkipBreak: (id: string) => {};
}

const PomodoroRight = (props: IPomodoroRight) => {
  const btnActions = useGetNameButton(
    props.timerIsRun,
    props.viewTask[0].isBreak,
    props.viewTask[0].isPause,
    props.APITimer,
    props.timerPause,
    props.viewTask[0].id,
    props.pressSkipBreak,
    props.dropDownAPI,
    props.addCancelThunk,
    props.APITimerStop,
    props.setCreteTask
  );

  const color = `${props.viewTask[0].isBreak ? S.color_green : S.color_red}  ${
    !props.timerIsRun && S.none
  }`;
  const { s, min } = fromMsToTime(props.viewTask[0].time);
  return (
    btnActions && (
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
                hendler={btnActions.l.action}
                title={btnActions.l.title}
              />
              <MyButton
                hendler={btnActions.r.action}
                title={btnActions.r.title}
                disabled={btnActions.r.disabled}
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
