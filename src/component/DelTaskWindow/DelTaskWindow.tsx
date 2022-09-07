import * as React from "react";
import S from "./DelTaskWindow.module.scss";
import MyButton from "../UI/MyButton/MyButton.tsx";
import useGoToHome from "../../hooks/useGoToHome.tsx";

interface IDelTaskWindow {
  delTask: (is: string) => {};
  task: {
    task: string;
    id: string;
  };
}

const DelTaskWindow = (props: IDelTaskWindow) => {
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
