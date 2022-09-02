import UseIsMounted from "./hooks/useIsMounted.tsx";
import { Provider } from "react-redux";
import store from "./store/Store.ts";
import { Routes, Route } from "react-router-dom";

import BodyPomodoroContainer from "./component/BodyPomodoro/BodyPomodoroContainer.tsx";
import EditTaskWindowContainer from "./component/EditTaskWindow/EditTaskWindowContainer.tsx";
import DelTaskWindowContainer from "./component/DelTaskWindow/DelTaskWindowContainer.tsx";
import StatisticsContainer from "./component/Statistics/StatisticsContainer.tsx";
import HeaderContainer from "./component/Header/HeaderContainer.tsx";

function App() {
  const mounted = UseIsMounted();
  return (
    <Provider store={store}>
      {mounted && (
        <div className="App">
          <HeaderContainer />
          <Routes>
            <Route path={"/"} element={<BodyPomodoroContainer />}>
              <Route path={"edit/:id"} element={<EditTaskWindowContainer />} />
              <Route path={"del/:id"} element={<DelTaskWindowContainer />} />
            </Route>
            <Route path={"/statistics"} element={<StatisticsContainer />} />
            <Route path={"/*"} element={<div>404</div>} />
          </Routes>
        </div>
      )}
    </Provider>
  );
}

export default App;
