import * as React from "react";
// @ts-ignore
import S from "./../Statistics.module.scss";
// @ts-ignore
import Select from "../../UI/Select/Select.tsx";

// @ts-ignore
import Row from "./Row/Row.tsx";
import GeneratorRandomString from "../../../utils/GeneratorRandomString.jsx";
import getRows from "../../../utils/getRows";

// @ts-ignore
import Column from "./Column/Column.tsx";
// @ts-ignore

import DayBlock from "./DayBlock/DayBlock.tsx";
// @ts-ignore
import TomatoBlock from "./TomatoBlock/TomatoBlock.tsx";
const StatiscticsBody = (props) => {
  const row = getRows(props.maxTimeTask.allTime.allSec);
  return (
    <div className={S.body}>
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
