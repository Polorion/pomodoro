import * as React from "react";
// @ts-ignore
import S from "./Header.module.scss";
// @ts-ignore
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
// @ts-ignore
import { ReactComponent as Statistics } from "../../assets/img/header.svg";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const history = useNavigate();
  const statClick = () => {
    history("/statistics");
    props.stopAllInterval();
  };
  return (
    <div className={S.header}>
      <div className={`container ${S.containerHeader}`}>
        <div className={S.logo}>
          <Logo />
          <p>pomodoro_box</p>
        </div>
        <div onClick={statClick} className={S.statistics}>
          <Statistics />
          <p>Статистика</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
