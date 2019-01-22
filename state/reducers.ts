import { combineReducers } from "redux";
import { State } from "../types";

export const rootReducer = combineReducers<State>({
  patients: (state = [], action) => {
    switch (action.type) {
      case "ADD_PATIENT":
        return [...state, action.payload];
      default:
        return state;
    }
  }
});
