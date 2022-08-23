import * as React from "react";
// @ts-ignore
import S from "./Header.module.scss";
// @ts-ignore
import logo from "../../assets/img/logo.svg";
// @ts-ignore
import statistics from "../../assets/img/header.svg";

const Header = () => {
  return (
    <div>
      <header>
        <div className={`container ${S.containerHeader}`}>
          <div className={S.logo}>
            <img src={logo} alt="" />
            <p>pomodoro_box</p>
          </div>
          <div className={S.statistics}>
            <img src={statistics} alt="" />
            <p>Статистика</p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
