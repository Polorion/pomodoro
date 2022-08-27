import * as React from "react";
// @ts-ignore
import S from "./../Statistics.module.scss";
// @ts-ignore
import Select from "../../UI/Select/Select.tsx";
// @ts-ignore
import { ReactComponent as Tomato } from "../../../assets/img/tomato.svg";
// @ts-ignore
import Row from "./Row/Row.tsx";
import GeneratorRandomString from "../../../utils/GeneratorRandomString.jsx";

const StatiscticsBody = (props) => {
  const rowData = [
    { time: 10 },
    { time: 20 },
    { time: 30 },
    { time: 40 },
    { time: 50 },
  ];
  const days = [
    {
      text: "ПН",
      height: "10%",
    },
    {
      text: "ВТ",
      height: "20%",
    },
    {
      text: "СР",
      height: "30%",
    },
    {
      text: "ЧТ",
      height: "10%",
    },
    {
      text: "ПТ",
      height: "80%",
    },
    {
      text: "СБ",
      height: "20%",
    },
    {
      text: "ВС",
      height: "10%",
    },
  ];
  return (
    <div className={S.body}>
      <div className={S.bodyLeft}>
        <div className={S.days}>
          <div className={S.day}>Суббота</div>
          <div className={S.dayInfo}>
            Вы работали над задачами в течение 51 минуты
          </div>
        </div>
        <div className={S.tomato}>
          <Tomato />
        </div>
      </div>
      <div className={S.bodyRight}>
        {days.map((el) => {
          return (
            <div key={GeneratorRandomString()} className={S.columnBody}>
              <div
                className={S.column}
                style={{ height: `${el.height}` }}
              ></div>
              <div className={S.nameColumn}>{el.text}</div>
            </div>
          );
        })}
        <div className={S.time}>
          {rowData.map((el) => {
            return <Row key={GeneratorRandomString()} time={el.time} />;
          })}
          <Row />
        </div>
      </div>
    </div>
  );
};

export default StatiscticsBody;
