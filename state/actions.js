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

export const updateServerConfiguration = config => ({
  type: "UPDATE_SERVER_CONFIGURATION",
  config
});

export const uploadPatients = () => {
  return (dispatch, getState) => {
    const { patients, server } = getState();
    dispatch(sendPatientsRequest());
    fetch(server.address, {
      method: "POST",
      headers: {
        Authorization: server.password
      },
      body: JSON.stringify(patients.queue)
    }).then(response => {
      if (response.status === 200) {
        dispatch(sendPatientsSuccess());
      }
    });
  };
};
