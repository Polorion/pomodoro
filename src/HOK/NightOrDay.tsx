import * as React from "react";
import { IBodyPomodoroContainer } from "../component/BodyPomodoro/BodyPomodoroContainer";
import { useState } from "react";
import { useSelector } from "react-redux";

const NightOrDay = <INightOrDay extends IBodyPomodoroContainer>(
  Component: React.ComponentType<INightOrDay>
) => {
  const AddNightOrDay = (props: INightOrDay) => {
    const nightOrDay = useSelector((state: any) => state.MainPage.nightOrDay);
    return <Component {...props} nightOrDay={nightOrDay} />;
  };
  return AddNightOrDay;
};

export default NightOrDay;
