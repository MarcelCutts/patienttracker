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
    console.log("🚨", server);
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
        console.log("🏂", response);
        switch (response.status) {
          case 200:
            return dispatch(sendPatientsSuccess(completedPatients));
          case 403:
            return dispatch(sendPatientsError("Incorrect password"));
          case 404:
            return dispatch(
              sendPatientsError("Could not find server at that address")
            );
          default:
            return dispatch(
              sendPatientsError(
                "An error occured. Ensure you are connected to the internet and check above details"
              )
            );
        }
      })
      .catch(error => console.log("💥", error));
  };
};
