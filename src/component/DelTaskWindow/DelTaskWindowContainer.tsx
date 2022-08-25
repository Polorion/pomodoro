import * as React from "react";
// @ts-ignore
import DelTaskWindow from "./DelTaskWindow.tsx";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
// @ts-ignore
import { deleteTask } from "../../store/MainReducer.ts";
const DelTaskWindowContainer = (props) => {
  const params = useParams();
  const editTask = props.allTask.filter((el) => el.id === params.id);
  return (
    <div>
      {props.allTask.length > 0 && (
        <DelTaskWindow task={editTask[0]} delTask={props.deleteTask} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allTask: state.MainPage.allTask,
  };
};

export default connect(mapStateToProps, { deleteTask })(DelTaskWindowContainer);
