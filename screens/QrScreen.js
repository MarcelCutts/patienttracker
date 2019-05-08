import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB, Portal } from "react-native-paper";
import { BarCodeScanner, Permissions } from "expo";
import { AddPatient } from "../components/AddPatient";
import { EditPatient } from "../components/EditPatient";
import { EnterPatientId } from "../components/EnterPatientId";
import { withNamespaces } from "react-i18next";
import { ViewPatient } from "../components/ViewPatient";
import { connect } from "react-redux";
import { addPatient, editPatient } from "../state/actions";

const DisplayType = {
  Scanner: "Scanner",
  AddPatient: "AddPatient",
  EditPatient: "EditPatient",
  ViewPatient: "ViewPatient",
  ManualEntry: "ManualEntry"
};

class QrScreenComponent extends React.Component {
  _isMounted = false;
  state = {
    hasCameraPermission: null,
    token: null,
    patient: null,
    display: DisplayType.Scanner
  };

  async componentDidMount() {
    this._isMounted = true;
    const { status } = await Permissions.askAsync(

      Permissions.CAMERA
    );

    if (this._isMounted) {
      this.setState({ hasCameraPermission: status === "granted" });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  hideDialog = () => this.setState({ display: DisplayType.Scanner });

  completeDialog = () => this.props.navigation.navigate("Home");

  addPatient = addEvent => {
    const { addPatient, user, navigation } = this.props;
    addPatient({
      ...user,
      timeStarted: Date.now(),
      ...addEvent
    });

    navigation.navigate("Home");
  };

  render() {
    const { t } = this.props;
    const { editPatient } = this.props;
    const { hasCameraPermission, token, patient, display } = this.state;

    if (hasCameraPermission === null) {
      return <Text>{t("qr:requesting")}</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>{t("qr:noAccess")}</Text>;
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
          label={t("qr:add")}
          onPress={this.handleEnterManually}
        />
        <Portal>
          <AddPatient
            visible={display === DisplayType.AddPatient}
            patientId={token}
            hideDialog={this.hideDialog}
            completeDialog={this.completeDialog}
            addPatient={this.addPatient}
          />
          {!!patient && (
            <>
              <EditPatient
                visible={display === DisplayType.EditPatient}
                patient={patient}
                hideDialog={this.hideDialog}
                completeDialog={this.completeDialog}
                editPatient={editPatient}
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
    let display = DisplayType.AddPatient;
    if (!!patient) display = DisplayType.EditPatient;
    if (!!patient && !!patient.timeEnded) display = DisplayType.ViewPatient;

    this.setState({ patient, token: data, display });
  };

  handleEnterManually = () =>
    this.setState({ display: DisplayType.ManualEntry });
}

const mapStateToProps = state => ({
  patients: state.patients.queue,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  addPatient: patient => dispatch(addPatient(patient)),
  editPatient: patient => dispatch(editPatient(patient))
});

export default withNamespaces(["qr"], { wait : true })(connect(
  mapStateToProps,
  mapDispatchToProps
)(QrScreenComponent));

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});
