const SET_ACTION_DAY = "SET_ACTION_DAY";
const SET_CREATE_TASK = "SET_CREATE_TASK";
const SET_SETTINGS = "SET_SETTINGS";

export const setActiveDay = (day: string) => {
  return {
    type: SET_ACTION_DAY,
    day,
  };
};
export const setSettings = (obj: {
  workTime: number;
  breakTime: number;
  bigBreakTime: number;
}) => {
  return {
    type: SET_SETTINGS,
    obj,
  };
};
export const setCreteTask = (day: string, task: string) => {
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
        allTime: 60000,
        cancel: 9,
        timeOfPaused: 20000,
        timeOfWorking: 40000,
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
  settings: {
    workTime: 600000,
    breakTime: 600000,
    bigBreakTime: 600000,
  },
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
    case SET_SETTINGS:
      console.log(action);
      return {
        ...state,
        settings: {
          workTime: action.obj.workTime,
          breakTime: action.obj.breakTime,
          bigBreakTime: action.obj.bigBreakTime,
        },
      };
    case SET_CREATE_TASK:
      return {
        ...state,
        compiltTaskTEST: {
          ...state.compiltTaskTEST,
          // @ts-ignore
          [action.day]: [...state.compiltTaskTEST[action.day], action.task],
        },
      };
    default:
      return state;
  }
};

export default StatisticsReducer;
