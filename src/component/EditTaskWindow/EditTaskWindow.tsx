import * as React from "react";
// @ts-ignore
import S from "./EditTaskWindow.module.scss";
// @ts-ignore
import MyButton from "../UI/MyButton/MyButton.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// @ts-ignore
import useGoToHome from "../../hooks/useGoToHome.tsx";

const EditTaskWindow = (props) => {
  const saveEdit = () => {
    props.taskEdit(props.task);
    exit();
  };
  useEffect(() => {
    props.editInputText(props.task.task);
  }, []);
  const exit = useGoToHome();
  const changeValue = (e) => {
    props.editInputText(e.currentTarget.value);
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
        <div className={S.header}></div>
        <div className={S.content}>
          <p>Дело: {props.task.task}</p>
          <label>
            <input onChange={changeValue} value={props.editInput} type="text" />
          </label>
          <MyButton hendler={saveEdit} title={"save"} />
        </div>
      </div>
    </div>
  );
};

export default EditTaskWindow;
