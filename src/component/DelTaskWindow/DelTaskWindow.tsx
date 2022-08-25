import * as React from "react";
// @ts-ignore
import S from "./DelTaskWindow.module.scss";
// @ts-ignore
import MyButton from "../UI/MyButton/MyButton.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// @ts-ignore
import useGoToHome from "../../hooks/useGoToHome.tsx";

const DelTaskWindow = (props) => {
  const exit = useGoToHome();
  const delTask = () => {
    props.delTask(props.task.id);
    exit();
  };

  return (
    <div className={S.window} onClick={exit}>
      <div
        className={S.body}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={S.exit} onClick={exit}></div>
        <div className={S.title}>Дело: {props.task.task}</div>
        <div className={S.btns}>
          <MyButton hendler={delTask} title={"Удалить"} stop={true} />
          <MyButton hendler={exit} title={"Отмена"} />
        </div>
      </div>
    </div>
  );
};

export default DelTaskWindow;
