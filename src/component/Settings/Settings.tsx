import * as React from "react";
import S from "./Settings.module.scss";
import ReactDOM from "react-dom";
import { useState } from "react";
import RangeInput from "../UI/RangeInput/RangeInput.tsx";
import MyButton from "../UI/MyButton/MyButton.tsx";
import useGoToHome from "../../hooks/useGoToHome.tsx";

interface ISettings {
  delTask: (is: string) => {};
  setSettings: (s: any) => {};
  task: {
    task: string;
    id: string;
  };
  settings: {
    workTime: number;
    breakTime: number;
    bigBreakTime: number;
  };
}

const Settings = (props: ISettings) => {
  const [workTime, setWorkTime] = useState(props.settings.workTime / 60000);
  const [breakTime, setBreakTime] = useState(props.settings.breakTime / 60000);
  const [bigBreakTime, bigBigBreakTime] = useState(
    props.settings.bigBreakTime / 60000
  );
  const node = document.querySelector("#settings");
  const exit = useGoToHome();

  const handler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    exit();

    props.setSettings({
      workTime: workTime * 60000,
      breakTime: breakTime * 60000,
      bigBreakTime: bigBreakTime * 60000,
    });
  };
  if (!node) return null;
  return ReactDOM.createPortal(
    <div className={S.body} onClick={exit}>
      <form
        className={S.form}
        onSubmit={handler}
        onClick={(e) => e.stopPropagation()}
      >
        <RangeInput
          value={workTime}
          action={setWorkTime}
          title={"время работы"}
        />
        <RangeInput
          value={breakTime}
          action={setBreakTime}
          title={"время маленького перерыва"}
        />
        <RangeInput
          value={bigBreakTime}
          action={bigBigBreakTime}
          title={"время большого перерыва"}
        />
        <MyButton title={"сохранить"} />
      </form>
    </div>,
    node
  );
};

export default Settings;
