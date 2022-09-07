import * as React from "react";
import S from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { ReactComponent as Statistics } from "../../assets/img/header.svg";
import { useNavigate } from "react-router-dom";
import NightOrDay from "./NightOrDay/NightOrDay.tsx";

interface IHeader {
  stopAllInterval: () => {};
  nightOrDay: boolean;
  setNightOrDay: () => {};
}

const Header = (props: IHeader) => {
  const history = useNavigate();
  const statClick = () => {
    history("/statistics");
    props.stopAllInterval();
  };
  const settingsClick = () => {
    history("/settings");
  };
  return (
    <div className={`${S.header} ${props.nightOrDay ? S.day : S.night}`}>
      <div className={`container ${S.containerHeader}`}>
        <div className={S.logo}>
          <Logo />
          <p>pomodoro_box</p>
        </div>
        <button onClick={settingsClick}>setings</button>
        <NightOrDay
          nightOrDay={props.nightOrDay}
          setNightOrDay={props.setNightOrDay}
        />
        <div onClick={statClick} className={S.statistics}>
          <Statistics />
          <p>Статистика</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
