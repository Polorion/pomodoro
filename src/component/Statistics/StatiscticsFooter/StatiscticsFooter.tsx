import * as React from "react";
// @ts-ignore
import S from "./../Statistics.module.scss";
// @ts-ignore
import { ReactComponent as Radius } from "../../../assets/img/radius.svg";
// @ts-ignore
import { ReactComponent as Clock } from "../../../assets/img/clock.svg";
// @ts-ignore
import { ReactComponent as Cancel } from "../../../assets/img/cancel.svg";
// @ts-ignore
import InfoBlock from "./InfoBlock/InfoBlock.tsx";
import GeneratorRandomString from "../../../utils/GeneratorRandomString.jsx";

const StatiscticsFooter = (props) => {
  const test = [
    {
      title: "Фокус",
      info: "30%",
      logo: Radius,
    },
    {
      title: "Время на паузе",
      info: "30%",
      logo: Clock,
    },
    {
      title: "Остановки",
      info: "30%",
      logo: Cancel,
    },
  ];
  return (
    <div className={S.footer}>
      {/*{test.map((el) => {*/}
      {/*  return (*/}
      {/*    <InfoBlock*/}
      {/*      key={GeneratorRandomString()}*/}
      {/*      title={el.title}*/}
      {/*      info={el.info}*/}
      {/*      logo={el.logo}*/}
      {/*    />*/}
      {/*  );*/}
      {/*})}*/}
      <div className={S.footerBlock}>
        <div className={S.left}>
          <h2>Фокус</h2>
          <div>{props.infoAllTask.tomato}</div>
        </div>
        <div className={S.right}>
          <Radius />
        </div>
      </div>
      <div className={S.footerBlock}>
        <div className={S.left}>
          <h2>"Время на паузе"</h2>
          <div>{props.infoAllTask.timeOfWorking}</div>
        </div>
        <div className={S.right}>
          <Clock />
        </div>
      </div>
      <div className={S.footerBlock}>
        <div className={S.left}>
          <h2>Остановки</h2>
          <div>{props.infoAllTask.cancel}</div>
        </div>
        <div className={S.right}>
          <Cancel />
        </div>
      </div>
    </div>
  );
};

export default StatiscticsFooter;
