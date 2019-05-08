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

export const sendPatientsRequest = () => ({
  type: "SEND_PATIENTS_REQUEST"
});

export const sendPatientsSuccess = () => ({
  type: "SEND_PATIENTS_SUCCESS"
});

export const sendPatientsFailure = error => ({
  type: "SEND_PATIENTS_FAILURE",
  error
});

export const uploadPatients = () => {
  return (dispatch, getState) => {
    dispatch(sendPatientsRequest());
    fetch("https://postman-echo.com/post", {
      method: "POST",
      body: JSON.stringify(getState().patients.queue)
    }).then(response => {
      if (response.status === 200) {
        dispatch(sendPatientsSuccess());
      }
    });
  };
};
