import Header from "./component/Header/Header.tsx";
import UseIsMounted from "./hooks/useIsMounted.tsx";
import { Provider } from "react-redux";
import store from "./store/Store.ts";
import { Routes, Route, Navigate, useHistory } from "react-router-dom";

import BodyPomodoroContainer from "./component/BodyPomodoro/BodyPomodoroContainer.tsx";
import EditTaskWindowContainer from "./component/EditTaskWindow/EditTaskWindowContainer.tsx";
import DelTaskWindowContainer from "./component/DelTaskWindow/DelTaskWindowContainer.tsx";

function App() {
  const mounted = UseIsMounted();
  return (
    <Provider store={store}>
      {mounted && (
        <div className="App">
          <Header />
          <Routes>
            <Route path={"/"} element={<BodyPomodoroContainer />}>
              <Route path={"edit/:id"} element={<EditTaskWindowContainer />} />
              <Route path={"del/:id"} element={<DelTaskWindowContainer />} />
            </Route>
          </Routes>
        </div>
      )}
    </Provider>
  );
}

export default App;
