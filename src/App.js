import UseIsMounted from "./hooks/useIsMounted.tsx";

import { Routes, Route } from "react-router-dom";

import BodyPomodoroContainer from "./component/BodyPomodoro/BodyPomodoroContainer.tsx";
import EditTaskWindowContainer from "./component/EditTaskWindow/EditTaskWindowContainer.tsx";
import DelTaskWindowContainer from "./component/DelTaskWindow/DelTaskWindowContainer.tsx";
import StatisticsContainer from "./component/Statistics/StatisticsContainer.tsx";
import HeaderContainer from "./component/Header/HeaderContainer.tsx";
import SettingsContainer from "./component/Settings/SettingsContainer.tsx";
import { connect } from "react-redux";
import { setActiveDay } from "./store/reducers/StatisticsReducer";

function App(props) {
  const mounted = UseIsMounted();
  return (
    mounted && (
      <div className={`App ${props.nightOrDay ? "day" : "night"}`}>
        <HeaderContainer />

        <Routes>
          <Route path={"/"} element={<BodyPomodoroContainer />}>
            <Route path={"edit/:id"} element={<EditTaskWindowContainer />} />
            <Route path={"del/:id"} element={<DelTaskWindowContainer />} />
            <Route path={"settings"} element={<SettingsContainer />} />
          </Route>
          <Route path={"/statistics"} element={<StatisticsContainer />} />
          <Route path={"/*"} element={<div>404</div>} />
        </Routes>
      </div>
    )
  );
}

const mapStateToProps = (state) => {
  return {
    nightOrDay: state.MainPage.nightOrDay,
  };
};

export default connect(mapStateToProps, { setActiveDay })(App);
