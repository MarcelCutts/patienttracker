import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB, Portal } from "react-native-paper";
import { BarCodeScanner, Permissions } from "expo";
import { AddPatient } from "../components/AddPatient";
import { NavigationScreenProp } from "react-navigation";
import { EditPatient } from "../components/EditPatient";
import { EnterPatientId } from "../components/EnterPatientId";
import { Patient, Store, User } from "../types";
import { ViewPatient } from "../components/ViewPatient";
import { connect } from "react-redux";
import { addPatient, editPatient } from "../state/actions";

interface Props {
  navigation: NavigationScreenProp<any, any>;
  patients: Array<Patient>;
  user: User;
  addPatient: (patient: Patient) => void;
  editPatient: (patient: Patient) => void;
}

enum DisplayType {
  Scanner,
  AddPatient,
  EditPatient,
  ViewPatient,
  ManualEntry
}

interface State {
  hasCameraPermission: null | boolean;
  display: DisplayType;
  token: null | string;
  patient: null | Patient;
}

class QrScreen extends React.Component<Props, State> {
  state = {
    hasCameraPermission: null,
    token: null,
    patient: null,
    display: DisplayType.Scanner
  };

  async componentDidMount() {
    const { status }: { status: string } = await Permissions.askAsync(
      Permissions.CAMERA
    );
    this.setState({ hasCameraPermission: status === "granted" });
  }

  hideDialog = () => this.setState({ display: DisplayType.Scanner });

  addPatient = addEvent => {
    const { addPatient, user, navigation } = this.props;
    addPatient({
      ...user,
      timeStarted: Date.now(),
      ...addEvent
    });

    navigation.navigate("Home");
  };

  editPatient = patient => {
    this.props.editPatient(patient);
    this.props.navigation.navigate("Home");
  };

  render() {
    const { hasCameraPermission, token, patient, display } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        {display === DisplayType.Scanner && (
          <BarCodeScanner
            onBarCodeScanned={this.handlePatient}
            style={StyleSheet.absoluteFill}
          />
        )}
        <FAB
          style={styles.fab}
          icon="create"
          label="Add manually"
          onPress={this.handleEnterManually}
        />
        <Portal>
          <AddPatient
            visible={display === DisplayType.AddPatient}
            token={token}
            hideDialog={this.hideDialog}
            addPatient={this.addPatient}
          />
          {!!patient && (
            <>
              <EditPatient
                visible={display === DisplayType.EditPatient}
                patient={patient}
                hideDialog={this.hideDialog}
                editPatient={this.editPatient}
              />
              <ViewPatient
                visible={display === DisplayType.ViewPatient}
                patient={patient}
                hideDialog={this.hideDialog}
              />
            </>
          )}

          <EnterPatientId
            visible={display === DisplayType.ManualEntry}
            hideDialog={this.hideDialog}
            handlePatient={this.handlePatient}
          />
        </Portal>
      </View>
    );
  }

  handlePatient = async ({ data }) => {
    const patient = this.props.patients.find(p => p.id === data);
    const display = !patient ? DisplayType.AddPatient : DisplayType.EditPatient;

    this.setState({ patient, token: data, display });
  };

  handleEnterManually = () =>
    this.setState({ display: DisplayType.ManualEntry });
}

const mapStateToProps = (state: Store) => ({
  patients: state.patients,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addPatient: patient => dispatch(addPatient(patient)),
  editPatient: patient => dispatch(editPatient(patient))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QrScreen);

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});
