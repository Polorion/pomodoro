// @ts-ignore
import { ThunkAction } from "redux-thunk";
// @ts-ignore
import { Action } from "redux";

const SET_ACTION_DAY = "SET_ACTION_DAY";
const SET_CREATE_TASK = "SET_CREATE_TASK";

export const setActiveDay = (day) => {
  return {
    type: SET_ACTION_DAY,
    day,
  };
};
export const setCreteTask = (day, task) => {
  return {
    type: SET_CREATE_TASK,
    day,
    task,
  };
};
const initionalState = {
  compiltTaskTEST: {
    Monday: [],
    Tuesday: [
      {
        allTime: 3000,
        cancel: 9,
        timeOfPaused: 90002,
        timeOfWorking: 4132000,
        tomato: 11,
      },
    ],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  },
  activeDay: "",
  //
  optionSelect: "1",
  //
};

const StatisticsReducer = (
  state = initionalState,
  action: { [key: string]: any }
) => {
  switch (action.type) {
    case SET_ACTION_DAY:
      return {
        ...state,
        activeDay: action.day,
      };
    case SET_CREATE_TASK:
      return {
        ...state,
        compiltTaskTEST: {
          ...state.compiltTaskTEST,
          [action.day]: [...state.compiltTaskTEST[action.day], action.task],
        },
      };
    default:
      return state;
  }
};

export default StatisticsReducer;
