import { Patient } from "../types";

export const addPatient = (payload: Patient) => ({
  type: "ADD_PATIENT",
  payload
});
