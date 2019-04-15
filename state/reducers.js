import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  patients: (state = [], action) => {
    switch (action.type) {
      case "ADD_PATIENT":
        return [...state, action.payload];
      case "EDIT_PATIENT":
        return state.map(p => {
          if (p.id !== action.payload.id) return p;
          return { ...p, ...action.payload };
        });
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
  }
});
