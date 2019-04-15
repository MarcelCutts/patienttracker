export const addPatient = payload => ({
  type: "ADD_PATIENT",
  payload
});

export const editPatient = payload => ({
  type: "EDIT_PATIENT",
  payload
});

export const setUser = payload => ({
  type: "SET_USER",
  payload
});

export const clearUser = () => ({
  type: "CLEAR_USER"
});
