import * as React from "react";
import LiItem from "../../UI/LiItem/LiItem.tsx";
import MyButton from "../../UI/MyButton/MyButton.tsx";
import S from "./PomodoroLeft.module.scss";
import Intention from "../../UI/Intention/Intention.tsx";
import GeneratorRandomString from "../../../utils/GeneratorRandomString";

interface IPomodoroLeft {
  nightOrDay: boolean;
  convertTomatoFromTime: {
    h: number;
    min: number;
  };
  allTask: [
    {
      task: string;
      id: string;
      presumablyTomato: number;
    }
  ];
  addTask: any;
  setActiveTaskThunk: any;
  setInputValue: any;
  inputValue: string;
  activeTask: string;
  stopTimer: () => {};
  dropDownAPI: {};
  setCountItem: (count: number, id: string) => {};
  settings: {
    workTime: number;
    breakTime: number;
    bigBreakTime: number;
  };
}

const PomodoroLeft = (props: IPomodoroLeft) => {
  const addTask = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (props.inputValue) {
      props.addTask(
        props.inputValue,
        GeneratorRandomString(),
        props.settings.workTime
      );
    }
  };
  const allLi = [
    "Выберите категорию и напишите название текущей задачи",
    "Запустите таймер («помидор»)",
    "Работайте пока «помидор» не прозвонит",
    "Сделайте короткий перерыв (3-5 минут)",
    "Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые «помидора» делайте длинный перерыв (15-30 минут).",
  ];
  return (
    <div className={S.body}>
      <div>
        <h3 className={` ${props.nightOrDay ? S.day : S.night}`}>
          Ура! Теперь можно начать работать:
        </h3>
        <ul className={S.listTop}>
          {allLi.map((el) => (
            <LiItem key={el} title={el} nightOrDay={props.nightOrDay} />
          ))}
        </ul>
      </div>
      <form
        onSubmit={addTask}
        className={`${S.form} ${props.nightOrDay ? S.day : S.night}`}
      >
        <input
          onInput={(e) => {
            props.setInputValue(e.currentTarget.value);
          }}
          value={props.inputValue}
          placeholder={"Название задачи"}
          type="text"
        />
        <div>
          <MyButton title={"Добавить"} />
        </div>
        <ul>
          {props.allTask.map((el, i) => (
            <Intention
              nightOrDay={props.nightOrDay}
              allTask={props.allTask}
              setCountItem={props.setCountItem}
              key={el.task}
              title={el.task}
              presumablyTomato={el.presumablyTomato}
              id={el.id}
              setActiveTaskThunk={props.setActiveTaskThunk}
              activeTask={props.activeTask}
              stopTimer={props.stopTimer}
              dropDownAPI={props.dropDownAPI}
            />
          ))}
        </ul>
        <div className={S.tomatToTime}>
          {props.convertTomatoFromTime.h > 0 &&
            props.convertTomatoFromTime.h + "час"}{" "}
          {props.convertTomatoFromTime.min} мин
        </div>
      </form>
    </div>
  );
};

export default PomodoroLeft;
