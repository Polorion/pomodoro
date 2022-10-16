import * as React from "react";
import S from "./PomodoroRight.module.scss";
import MyButton from "../../UI/MyButton/MyButton.tsx";
import { ReactComponent as Add } from "../../../assets/img/add.svg";
import fromMsToTime from "../../../utils/ConverterMsFromTime";

import useGetNameButton from "../../../utils/getNameButton.tsx";
import ViewTask from "../../../HOK/ViewTask";
import NightOrDay from "../../../HOK/NightOrDay";
import { IBodyPomodoro } from "../BodyPomodoro";

const PomodoroRight = (props: IBodyPomodoro) => {
  const btnActions = useGetNameButton(
    props.timerPauseOrRun,
    props.viewTask.isBreak,
    props.viewTask.isPause,
    props.APITimer,
    props.viewTask.id,
    props.pressSkipBreak,
    props.dropDownAPI,
    props.addCancelThunk,
    props.setCreteTask,
    props.settings
  );

  const color = `${props.viewTask.isBreak ? S.color_green : S.color_red}  ${
    !props.timerPauseOrRun.timerIsRun && S.none
  }`;
  const { s, min } = fromMsToTime(props.viewTask.time);
  return (
    btnActions && (
      <div className={`${S.rightBody}  ${props.nightOrDay ? S.day : S.night}`}>
        <header className={`${S.header} ${color} `}>
          <h3>{props.viewTask.task}</h3>
          <div>
            Помидор: <span>{props.viewTask.tomato}</span>
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
                  props.addMinute(props.viewTask.id);
                }}
              >
                <Add className={S.img} />
              </div>
            </div>
            <div className={S.task}>
              задача:<span>{props.viewTask.count} - </span>
              <div>{props.viewTask.task}</div>
            </div>
          </div>
          <div>
            <div className={S.btn}>
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
export default NightOrDay(ViewTask(PomodoroRight));
