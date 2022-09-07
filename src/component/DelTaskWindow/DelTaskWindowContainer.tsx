import * as React from "react";
import DelTaskWindow from "./DelTaskWindow.tsx";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTask } from "../../store/MainReducer.ts";

interface IDelTaskWindowContainer {
  allTask: [{ id: string }];
  deleteTask: () => {};
}

const DelTaskWindowContainer = (props: IDelTaskWindowContainer) => {
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

const mapStateToProps = (state: any) => {
  return {
    allTask: state.MainPage.allTask,
  };
};

export default connect(mapStateToProps, { deleteTask })(DelTaskWindowContainer);
