import * as React from "react";
import Header from "./Header.tsx";
import { connect } from "react-redux";
import { setNightOrDay, timerRun } from "../../store/MainReducer.ts";
import audio from "../../assets/audio/first.mp3";

interface IHeaderContainer {
  setNightOrDay: any;
  intervalPaused: string;
  intervalGo: string;
  timerRun: () => {};
  nightOrDay: boolean;
}

const HeaderContainer = (props: IHeaderContainer) => {
  console.log(props, 33);
  const stopAllInterval = () => {
    clearInterval(props.intervalPaused);
    clearInterval(props.intervalGo);
    props.timerRun();
  };
  return (
    <>
      <audio src={audio}></audio>
      <Header
        stopAllInterval={stopAllInterval}
        setNightOrDay={props.setNightOrDay}
        nightOrDay={props.nightOrDay}
      />
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    intervalPaused: state.MainPage.intervalPaused,
    intervalGo: state.MainPage.intervalGo,
    nightOrDay: state.MainPage.nightOrDay,
  };
};
export default connect(mapStateToProps, { timerRun, setNightOrDay })(
  HeaderContainer
);
