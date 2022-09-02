// @ts-ignore
import { ThunkAction } from "redux-thunk";
// @ts-ignore
import { Action } from "redux";
import { AppStateType } from "./Store";
// @ts-ignore

const SET_TASK = "SET_TASK";
const SET_INPUT_VALUE = "SET_INPUT_VALUE";
const SET_ACTIVE_TASK = "SET_ACTIVE_TASK";
const SET_TIMER = "SET_TIMER";
const TIMER_IS_RUN = "TIMER_IS_RUN";
const TIMER_IS_PAUSE = "TIMER_IS_PAUSE";
const ADD_TOMATO = "ADD_TOMATO";
const ADD_MINUTE = "ADD_MINUTE";
const SUB_TOMATO = "SUB_TOMATO";
const DELETE_TASK = "DELETE_TASK";
const EDIT_TASK = "EDIT_TASK";
const EDIT_INPUT_VALUE = "EDIT_INPUT_VALUE";
const SET_ITEM_COUNT = "SET_ITEM_COUNT";
const SET_BREAK = "SET_BREAK";
const ADD_SECOND_WORK = "ADD_SECOND_WORK";
const RESET_TIMER = "RESET_TIMER";
const ADD_SECOND_PAUSED = "ADD_SECOND_PAUSED";
const ADD_CANCEL = "ADD_CANCEL";
const SET_TIMER_INTERVAL = "SET_TIMER_INTERVAL";
const SET_PRE_TOMATO = "SET_PRE_TOMATO";
const SET_PRE_TOMATO_TIME = "SET_PRE_TOMATO_TIME";

export const addTask = (task: string, id) => {
  return {
    type: SET_TASK,
    task: {
      task,
      id,
      time: 2000,
      tomato: 0,
      isBreak: false,
      isPause: false,
      allTimeWork: 0,
      timePaused: 0,
      cancel: 0,
      presumablyTomato: 1,
    },
  };
};
export const setTimer = (activeTask) => {
  return {
    type: SET_TIMER,
    activeTask,
  };
};
export const setPreTimeTomato = (obj) => {
  return {
    type: SET_PRE_TOMATO_TIME,
    obj,
  };
};
export const setPreTomato = (id, prop) => {
  return {
    type: SET_PRE_TOMATO,
    prop,
    id,
  };
};
export const setTimerInterval = (inverval, name) => {
  return {
    type: SET_TIMER_INTERVAL,
    inverval,
    name,
  };
};
export const addCancel = (task) => {
  return {
    type: ADD_CANCEL,
    task,
  };
};
export const resetTimer = (task) => {
  return {
    type: RESET_TIMER,
    task,
  };
};
export const setBreak = (task) => {
  return {
    type: SET_BREAK,
    task,
  };
};
export const setCountItem = (count, idTask) => {
  return {
    type: SET_ITEM_COUNT,
    count,
    idTask,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    taskId,
  };
};
export const addTomato = (task) => {
  return {
    type: ADD_TOMATO,
    task,
  };
};
export const addMinute = (task, time = 60000) => {
  return {
    type: ADD_MINUTE,
    task,
    time,
  };
};
export const taskEdit = (task) => {
  return {
    type: EDIT_TASK,
    task,
  };
};
export const subTomato = (task) => {
  return {
    type: SUB_TOMATO,
    task,
  };
};
export const timerRun = (done) => {
  return {
    type: TIMER_IS_RUN,
    done,
  };
};
export const timerPause = (task, done) => {
  return {
    type: TIMER_IS_PAUSE,
    task,
    done,
  };
};
export const addInputValue = (text: string) => {
  return {
    type: SET_INPUT_VALUE,
    text,
  };
};
export const addSecondWork = (task) => {
  return {
    type: ADD_SECOND_WORK,
    task,
  };
};
export const addSecondPaused = (task) => {
  return {
    type: ADD_SECOND_PAUSED,
    task,
  };
};
export const editInputText = (text: string) => {
  return {
    type: EDIT_INPUT_VALUE,
    text,
  };
};
export const setActiveTask = (text: string) => {
  return {
    type: SET_ACTIVE_TASK,
    text,
  };
};
const initionalState = {
  allTask: [
    {
      task: "TEST",
      id: "dsadsads",
      time: 9000,
      tomato: 0,
      isBreak: false,
      isPause: false,
      count: "fdsfds",
      allTimeWork: 0,
      timePaused: 0,
      cancel: 0,
      presumablyTomato: 1,
    },
  ],
  inputValue: "",
  activeTask: "",
  timerIsRun: false,
  editInput: "",
  intervalPaused: "",
  intervalGo: "",
  convertTomatoFromTime: {
    h: 0,
    min: 0,
  },
};

const MainRecucer = (
  state = initionalState,
  action: { [key: string]: any }
) => {
  switch (action.type) {
    case SET_TASK:
      return {
        ...state,
        allTask: state.allTask.concat(action.task),
      };
    case TIMER_IS_PAUSE:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === action.task) {
            return {
              ...el,
              isPause: action.done,
            };
          }
          return el;
        }),
      };
    case RESET_TIMER:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === action.task) {
            return {
              ...el,
              time: 0,
            };
          }
          return el;
        }),
      };
    case SET_ITEM_COUNT:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === action.idTask) {
            return {
              ...el,
              count: action.count,
            };
          }
          return el;
        }),
      };
    case SET_BREAK:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === action.task) {
            return {
              ...el,
              isBreak: !el.isBreak,
            };
          }
          return el;
        }),
      };
    case SET_TIMER_INTERVAL:
      return {
        ...state,
        [action.name]: action.inverval,
      };
    case SET_PRE_TOMATO_TIME:
      return {
        ...state,
        convertTomatoFromTime: {
          h: action.obj.h,
          min: action.obj.min,
        },
      };
    case ADD_CANCEL:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === action.task) {
            return {
              ...el,
              cancel: el.cancel + 1,
            };
          }
          return el;
        }),
      };
    case TIMER_IS_RUN:
      return {
        ...state,
        timerIsRun: action.done,
      };
    case ADD_TOMATO:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === action.task) {
            return {
              ...el,
              tomato: el.tomato + 1,
            };
          }
          return el;
        }),
      };
    case ADD_MINUTE:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === action.task) {
            return {
              ...el,
              time: el.time + action.time,
            };
          }
          return el;
        }),
      };
    case DELETE_TASK:
      return {
        ...state,
        activeTask: "",
        allTask: state.allTask.filter((el) => {
          if (el.id !== action.taskId) {
            return el;
          }
        }),
      };
    case SUB_TOMATO:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === state.activeTask) {
            return {
              ...el,
              tomato: el.tomato - 1,
            };
          }
          return el;
        }),
      };
    case SET_TIMER:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === state.activeTask) {
            return {
              ...el,
              time: el.time - 1000,
            };
          }
          return el;
        }),
      };
    case SET_PRE_TOMATO:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === action.id) {
            if (action.prop === "add") {
              return {
                ...el,
                presumablyTomato: el.presumablyTomato + 1,
              };
            } else {
              return {
                ...el,
                presumablyTomato: el.presumablyTomato - 1,
              };
            }
          }
          return el;
        }),
      };
    case ADD_SECOND_WORK:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === state.activeTask) {
            return {
              ...el,
              allTimeWork: el.allTimeWork + 1000,
            };
          }
          return el;
        }),
      };
    case ADD_SECOND_PAUSED:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === state.activeTask) {
            return {
              ...el,
              timePaused: el.timePaused + 1000,
            };
          }
          return el;
        }),
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.text,
      };
    case EDIT_INPUT_VALUE:
      return {
        ...state,
        editInput: action.text,
      };
    case SET_ACTIVE_TASK:
      return {
        ...state,
        activeTask: action.text,
      };
    case EDIT_TASK:
      return {
        ...state,
        allTask: state.allTask.map((el) => {
          if (el.id === action.task.id) {
            return {
              ...el,
              task: state.editInput,
            };
          }
          return el;
        }),
      };
    default:
      return state;
  }
};

export default MainRecucer;

export const setTask =
  (task, id): ThunkAction<void, AppStateType, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(addTask(task, id));
    dispatch(addInputValue(""));
  };
export const setInputValue =
  (text): ThunkAction<void, AppStateType, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(addInputValue(text));
  };
export const setActiveTaskThunk =
  (text): ThunkAction<void, AppStateType, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(setActiveTask(text));
  };
export const addCancelThunk =
  (task): ThunkAction<void, AppStateType, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(addCancel(task));
    dispatch(timerRun(false));
    dispatch(resetTimer(task));
    dispatch(addMinute(task, 10000));
  };
export const setTimerThunk =
  (activeTask): ThunkAction<void, AppStateType, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(addSecondWork(activeTask));
    dispatch(setTimer(activeTask));
  };
export const pressSkipBreak =
  (task): ThunkAction<void, AppStateType, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(timerRun(false));
    dispatch(setBreak(task));
    dispatch(resetTimer(task));
    dispatch(addMinute(task, 10000));
  };
export const setBreakThunk =
  (
    task,
    pomodor,
    isBreak
  ): ThunkAction<void, AppStateType, unknown, Action<string>> =>
  (dispatch) => {
    if (isBreak) {
      dispatch(addMinute(task, 3000));
    } else {
      if (pomodor % 3 === 0 && pomodor !== 0) {
        dispatch(addMinute(task, 5000));
        alert("большой перерыв");
      } else {
        dispatch(addMinute(task, 3000));
        alert("маленький перерыв");
      }
    }
    dispatch(setBreak(task));
  };
