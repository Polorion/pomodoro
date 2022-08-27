// @ts-ignore
import { ThunkAction } from "redux-thunk";
// @ts-ignore
import { Action } from "redux";

const SET_OPTION_SELECT = "SET_ACTIVE_TASK";

export const setActiveTask = (value) => {
  return {
    type: SET_OPTION_SELECT,
    value,
  };
};
const initionalState = {
  optionSelect: "1",
};

const StatisticsReducer = (
  state = initionalState,
  action: { [key: string]: any }
) => {
  switch (action.type) {
    case SET_OPTION_SELECT:
      return {
        ...state,
        optionSelect: action.value,
      };
    default:
      return state;
  }
};

export default StatisticsReducer;
