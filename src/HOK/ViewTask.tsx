import * as React from "react";

import { IBodyPomodoroContainer } from "../component/BodyPomodoro/BodyPomodoroContainer";
import { useSelector } from "react-redux";

const ViewTask = <BaseProps extends IBodyPomodoroContainer>(
  Component: React.ComponentType<BaseProps>
) => {
  const HViewTask = (props: BaseProps) => {
    const allTask = useSelector((state: any) => state.MainPage.allTask);
    const activeTask = useSelector((state: any) => state.MainPage.activeTask);
    const task = allTask.filter((el: { id: string }) => {
      if (el.id === activeTask) {
        return el;
      }
    });

    return (
      <div>
        <Component {...props} viewTask={task[0]} />
      </div>
    );
  };
  return HViewTask;
};

export default ViewTask;
