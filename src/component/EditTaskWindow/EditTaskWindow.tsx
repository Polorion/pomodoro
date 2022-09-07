import * as React from "react";
import S from "./EditTaskWindow.module.scss";
import MyButton from "../UI/MyButton/MyButton.tsx";
import { useEffect } from "react";
import useGoToHome from "../../hooks/useGoToHome.tsx";

interface IEditTaskWindow {
  editInput: string;
  taskEdit: (taks: any) => {};
  editInputText: (t: string) => {};
  task: {
    task: string;
  };
}

const EditTaskWindow = (props: IEditTaskWindow) => {
  const saveEdit = () => {
    props.taskEdit(props.task);
    exit();
  };
  useEffect(() => {
    props.editInputText(props.task.task);
  }, []);
  const exit = useGoToHome();
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
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
