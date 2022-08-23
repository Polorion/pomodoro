// @ts-ignore
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
  // @ts-ignore
} from "redux";
// @ts-ignore
import { composeWithDevTools } from "redux-devtools-extension";
// @ts-ignore
import MainReducer from "./MainReducer.ts";
// @ts-ignore

import thunk from "redux-thunk";

const redusers = combineReducers({
  MainPage: MainReducer,
});

type RootReducerType = typeof redusers;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(
  redusers,
  composeWithDevTools(applyMiddleware(thunk))
);
// @ts-ignore
export default store;
