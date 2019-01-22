import { Patient, User } from "../types";

export const addPatient = (payload: Patient) => ({
  type: "ADD_PATIENT",
  payload
});

export const editPatient = (payload: Patient) => ({
  type: "EDIT_PATIENT",
  payload
});

export const setUser = (payload: User) => ({
  type: "SET_USER",
  payload
});

export const clearUser = () => ({
  type: "CLEAR_USER"
});
