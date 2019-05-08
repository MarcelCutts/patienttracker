import { combineReducers } from "redux";

const patientsInitialState = { queue: [], isFetching: false };

export const rootReducer = combineReducers({
  patients: (state = patientsInitialState, action) => {
    switch (action.type) {
      case "ADD_PATIENT":
        return { ...state, queue: [...state.queue, action.payload] };
      case "EDIT_PATIENT":
        return {
          ...state,
          queue: state.queue.map(p => {
            if (p.id !== action.payload.id) return p;
            return { ...p, ...action.payload };
          })
        };
      case "SEND_PATIENTS_REQUEST":
        return { ...state, isFetching: true };
      case "SEND_PATIENTS_SUCCESS":
        return { ...state, queue: [], isFetching: false };
      default:
        return state;
    }
  },
  user: (state = null, action) => {
    switch (action.type) {
      case "SET_USER":
        return action.payload;
      case "CLEAR_USER":
        return null;
      default:
        return state;
    }
  },
  server: (
    state = {
      address: "https://postman-echo.com/post",
      password: "test"
    },
    action
  ) => {
    switch (action.type) {
      case "UPDATE_SERVER_CONFIGURATION":
        return action.config;
      default:
        return state;
    }
  }
});
