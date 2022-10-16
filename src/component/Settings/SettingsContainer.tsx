import * as React from "react";
import Settings from "./Settings.tsx";
import { connect } from "react-redux";
import { deleteTask } from "../../store/reducers/MainReducer.ts";
import { setSettings } from "../../store/reducers/StatisticsReducer.ts";

interface ISettingsContainer {
  allTask: [{ id: string }];
  deleteTask: () => {};
  setSettings: (s: any) => {};
  settings: {
    workTime: number;
    breakTime: number;
    bigBreakTime: number;
  };
}

const SettingsContainer = (props: ISettingsContainer) => {
  return (
    <div>
      <Settings setSettings={props.setSettings} settings={props.settings} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    allTask: state.MainPage.allTask,
    settings: state.Statistics.settings,
  };
};

export default connect(mapStateToProps, { deleteTask, setSettings })(
  SettingsContainer
);
