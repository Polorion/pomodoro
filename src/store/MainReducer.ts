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
const ADD_TOMATO = "ADD_TOMATO";
const ADD_MINUTE = "ADD_MINUTE";
const SUB_TOMATO = "SUB_TOMATO";
const DELETE_TASK = "DELETE_TASK";
const EDIT_TASK = "EDIT_TASK";
const EDIT_INPUT_VALUE = "EDIT_INPUT_VALUE";

export const addTask = (task: string, id) => {
  return {
    type: SET_TASK,
    task: {
      task,
      id,
      time: 6000,
      tomato: 0,
      isBreak: false,
    },
  };
};
export const setTimer = (activeTask) => {
  return {
    type: SET_TIMER,
    activeTask,
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
export const addMinute = (task) => {
  return {
    type: ADD_MINUTE,
    task,
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
export const addInputValue = (text: string) => {
  return {
    type: SET_INPUT_VALUE,
    text,
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
  allTask: [],
  inputValue: "",
  activeTask: "",
  timerIsRun: false,
  editInput: "",
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
              time: el.time + 60000,
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
              tomato: el.tomato > 0 ? el.tomato - 1 : 0,
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
export const setTimerThunk =
  (activeTask): ThunkAction<void, AppStateType, unknown, Action<string>> =>
  (dispatch) => {
    console.log(1);
    dispatch(setTimer(activeTask));
  };
