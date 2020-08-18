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
          queue: state.queue.map((p) => {
            if (p.id !== action.payload.id) return p;
            return { ...p, ...action.payload };
          }),
        };
      case "SEND_PATIENTS_REQUEST":
        return { ...state, isFetching: true, error: null };
      case "SEND_PATIENTS_SUCCESS": {
        const uploadedIds = action.patients.map((p) => p.id);
        return {
          ...state,
          queue: state.queue.filter((p) => !uploadedIds.includes(p.id)),
          isFetching: false,
        };
      }
      case "SEND_PATIENTS_ERROR": {
        return {
          ...state,
          isFetching: false,
          error: action.error,
        };
      }
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
      address: "https://whispering-meadow-82942.herokuapp.com/patients",
      password: "secret",
    },
    action
  ) => {
    switch (action.type) {
      case "UPDATE_SERVER_CONFIGURATION":
        return action.config;
      default:
        return state;
    }
  },
});
