import Header from "./component/Header/Header.tsx";
import UseIsMounted from "./hooks/useIsMounted.tsx";
import { Provider } from "react-redux";
import store from "./store/Store.ts";
import { Routes, Route, Navigate, useHistory } from "react-router-dom";

// @ts-ignore
import BodyPomodoroContainer from "./component/BodyPomodoro/BodyPomodoroContainer.tsx";
// @ts-ignore
import EditTaskWindowContainer from "./component/EditTaskWindow/EditTaskWindowContainer.tsx";

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
            </Route>
          </Routes>
        </div>
      )}
    </Provider>
  );
}

export default App;
