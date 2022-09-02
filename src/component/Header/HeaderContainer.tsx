import * as React from "react";
// @ts-ignore
import Header from "./Header.tsx";
import { connect } from "react-redux";
// @ts-ignore
import { timerRun } from "../../store/MainReducer.ts";

const HeaderContainer = (props) => {
  const stopAllInterval = () => {
    clearInterval(props.intervalPaused);
    clearInterval(props.intervalGo);
    props.timerRun();
  };
  return <Header stopAllInterval={stopAllInterval} />;
};

const mapStateToProps = (state) => {
  return {
    intervalPaused: state.MainPage.intervalPaused,
    intervalGo: state.MainPage.intervalGo,
  };
};
export default connect(mapStateToProps, { timerRun })(HeaderContainer);
