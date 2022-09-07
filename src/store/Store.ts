import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import MainReducer from "./MainReducer.ts";

import StatisticsReducer from "./StatisticsReducer.ts";

import thunk from "redux-thunk";

const redusers = combineReducers({
  MainPage: MainReducer,
  Statistics: StatisticsReducer,
});

type RootReducerType = typeof redusers;
export type AppStateType = ReturnType<RootReducerType>;

const store = createStore(
  redusers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
