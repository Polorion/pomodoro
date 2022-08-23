import * as React from "react";
// @ts-ignore
import LiItem from "../../UI/LiItem/LiItem.tsx";
// @ts-ignore
import MyButton from "../../UI/MyButton/MyButton.tsx";
// @ts-ignore
import S from "./PomodoroLeft.module.scss";
// @ts-ignore
import Intention from "../../UI/Intention/Intention.tsx";
import GeneratorRandomString from "../../../utils/GeneratorRandomString";
import { setActiveTaskThunk } from "../../../store/MainReducer";

interface IPomodoroLeft {
  allTask: [
    {
      task: string;
      id: string;
    }
  ];
  addTask: any;
  setActiveTaskThunk: any;
  setInputValue: any;
  inputValue: string;
  activeTask: string;
  stopTimer: () => {};
  dropDownAPI: {};
}

const PomodoroLeft = (props: IPomodoroLeft) => {
  const addTask = (e) => {
    e.preventDefault();
    if (props.inputValue) {
      props.addTask(props.inputValue, GeneratorRandomString());
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
        <h3>Ура! Теперь можно начать работать:</h3>
        <ul className={S.listTop}>
          {allLi.map((el) => (
            <LiItem key={el} title={el} />
          ))}
        </ul>
      </div>
      <form onSubmit={addTask} className={S.form}>
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
              key={el.task + i}
              title={el.task}
              count={i + 1}
              id={el.id}
              setActiveTaskThunk={props.setActiveTaskThunk}
              activeTask={props.activeTask}
              stopTimer={props.stopTimer}
              dropDownAPI={props.dropDownAPI}
            />
          ))}
        </ul>
      </form>
    </div>
  );
};

export default PomodoroLeft;
