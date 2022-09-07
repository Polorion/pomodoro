import * as React from "react";
import S from "./../Statistics.module.scss";
import Row from "./Row/Row.tsx";
import GeneratorRandomString from "../../../utils/GeneratorRandomString.jsx";
import getRows from "../../../utils/getRows";
import Column from "./Column/Column.tsx";
import DayBlock from "./DayBlock/DayBlock.tsx";
import TomatoBlock from "./TomatoBlock/TomatoBlock.tsx";

interface IStatiscticsBody {
  setActiveDay: () => {};
  tasks: [{ id: string }];
  activeDay: {
    allTime: string;
  };
  nightOrDay: boolean;
  maxTimeTask: {
    allTime: {
      allSec: string;
    };
  };
}

const StatiscticsBody = (props: IStatiscticsBody) => {
  const row = getRows(props.maxTimeTask.allTime.allSec);
  return (
    <div className={`${S.body} ${props.nightOrDay ? S.day : S.night}`}>
      <div className={S.bodyLeft}>
        <DayBlock
          allTime={props.activeDay.allTime}
          activeDay={props.activeDay}
        />
        <TomatoBlock activeDay={props.activeDay} />
      </div>
      <div className={S.bodyRight}>
        {props.tasks.map((el) => {
          return (
            <Column
              key={GeneratorRandomString()}
              day={el}
              setActiveDay={props.setActiveDay}
              activeDay={props.activeDay}
            />
          );
        })}
        <div className={S.time}>
          {row.map((el) => {
            return <Row key={GeneratorRandomString()} time={el.time} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default StatiscticsBody;
