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

export const sendPatientsSuccess = patients => ({
  type: "SEND_PATIENTS_SUCCESS",
  patients
});

export const sendPatientsError = error => ({
  type: "SEND_PATIENTS_ERROR",
  error
});

export const updateServerConfiguration = config => ({
  type: "UPDATE_SERVER_CONFIGURATION",
  config
});

export const uploadPatients = () => {
  return (dispatch, getState) => {
    const { patients, server } = getState();
    const completedPatients = patients.queue.filter(p => p.timeFinished);
    dispatch(sendPatientsRequest());
    fetch(server.address, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: server.password
      },
      body: JSON.stringify(completedPatients)
    })
      .then(response => {
        switch (response.status) {
          case 200:
            return dispatch(sendPatientsSuccess(completedPatients));
          case 403:
            return dispatch(sendPatientsError("settings:incorrectPassword"));
          case 404:
            return dispatch(sendPatientsError("settings:couldNotFind"));
          default:
            return dispatch(sendPatientsError("settings:genericError"));
        }
      })
      .catch(error => {
        console.log("💥", error);
        dispatch(sendPatientsError("settings:genericError"));
      });
  };
};
