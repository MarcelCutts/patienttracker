import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Button,
  Dialog,
  Paragraph,
  TextInput,
  Divider
} from "react-native-paper";
import { addPatient } from "../state/actions";
import { connect } from "react-redux";

export class AddPatientComponent extends React.Component {
  state = {
    comments: ""
  };

  addPatient = (
    patientId,
    comments,
    user,
    dispatchAddPatient,
    completeDialog
  ) => {
    const newPatient = {
      id: patientId,
      comments,
      timeStarted: Date.now(),
      ...user
    };

    dispatchAddPatient(newPatient);
    completeDialog();
  };

  render() {
    const {
      visible,
      patientId,
      user,
      hideDialog,
      dispatchAddPatient,
      completeDialog
    } = this.props;
    const { comments } = this.state;
    return (
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Add patient to queue?</Dialog.Title>
        <Dialog.Content>
          <View style={styles.container}>
            <MaterialCommunityIcons name="qrcode" size={80} />
            <Paragraph>{patientId}</Paragraph>
          </View>

          <TextInput
            mode="outlined"
            label="Comments"
            onChangeText={text => this.setState({ comments: text })}
            value={comments}
          />
        </Dialog.Content>
        <Divider />
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button
            onPress={() =>
              this.addPatient(
                patientId,
                comments,
                user,
                dispatchAddPatient,
                completeDialog
              )
            }
            mode="contained"
          >
            Add to queue
          </Button>
        </Dialog.Actions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  dispatchAddPatient: patient => dispatch(addPatient(patient))
});

export const AddPatient = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPatientComponent);

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 8 },
  manualInput: { flex: 1 },
  actions: {
    justifyContent: "space-between"
  }
});
