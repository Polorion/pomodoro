import * as React from "react";
// @ts-ignore
import EditTaskWindow from "./EditTaskWindow.tsx";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
// @ts-ignore
import { editInputText, taskEdit } from "../../store/MainReducer.ts";
const EditTaskWindowContainer = (props) => {
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

const mapStateToProps = (state) => {
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
