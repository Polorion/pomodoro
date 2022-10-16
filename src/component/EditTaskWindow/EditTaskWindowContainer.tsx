import * as React from "react";
import EditTaskWindow from "./EditTaskWindow.tsx";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { editInputText, taskEdit } from "../../store/reducers/MainReducer.ts";

interface IEditTaskWindowContainer {
  taskEdit: string;
  editInput: string;
  editInputText: string;
  allTask: [
    {
      id: string;
    }
  ];
}

const EditTaskWindowContainer = (props: IEditTaskWindowContainer) => {
  const params = useParams();
  const editTask = props.allTask.filter((el) => el.id === params.id);
  return (
    <div>
      {editTask.length > 0 && (
        <EditTaskWindow
          task={editTask[0]}
          editInputText={props.editInputText}
          editInput={props.editInput}
          taskEdit={props.taskEdit}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    allTask: state.MainPage.allTask,
    inputValue: state.MainPage.inputValue,
    activeTask: state.MainPage.activeTask,
    timerIsRun: state.MainPage.timerIsRun,
    editInput: state.MainPage.editInput,
  };
};

export default connect(mapStateToProps, { editInputText, taskEdit })(
  EditTaskWindowContainer
);
