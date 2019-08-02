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
    console.log("🚨", server);
    dispatch(sendPatientsRequest());
    fetch(server.address, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: server.password
      },
      body: JSON.stringify(patients.queue)
    })
      .then(response => {
        if (response.status === 200) {
          dispatch(sendPatientsSuccess());
        } else {
          console.log("🚛", response);
          dispatch(sendPatientsError(response.body));
        }
      })
      .catch(error => console.log("💥", error));
  };
};
