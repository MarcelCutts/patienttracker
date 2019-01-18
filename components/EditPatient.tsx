import React from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Button,
  Dialog,
  Paragraph,
  TextInput,
  Divider
} from "react-native-paper";
import { Patient } from "../types";

type Props = {
  visible: boolean;
  patient: Patient;
  hideDialog: () => void;
  navigate: (destingation: string) => void;
};

type State = {
  comments: string;
};

export class EditPatient extends React.Component<Props, State> {
  state = {
    comments: this.props.patient && this.props.patient.comments
  };

  updatePatient = async () => {
    const { patient } = this.props;
    const updatedPatient = {
      ...patient,
      comments: this.state.comments
    };

    await AsyncStorage.setItem(
      `Patient-${patient.id}`,
      JSON.stringify(updatedPatient)
    );
    this.props.navigate("Home");
  };

  finishPatient = async () => {
    const { patient } = this.props;
    const finishedPatient = {
      ...patient,
      timeEnded: Date.now()
    };

    await AsyncStorage.setItem(
      `Patient-${patient.id}`,
      JSON.stringify(finishedPatient)
    );
    this.props.navigate("Home");
  };

  render() {
    const { visible, patient, hideDialog } = this.props;
    return (
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Edit patient?</Dialog.Title>
        <Dialog.Content>
          <View style={styles.container}>
            <MaterialCommunityIcons name="qrcode" size={80} />
            <Paragraph>{patient.id}</Paragraph>
          </View>

          <TextInput
            mode="outlined"
            label="Comments"
            onChangeText={text => this.setState({ comments: text })}
            value={this.state.comments}
          />
        </Dialog.Content>
        <Divider />
        <Dialog.Actions style={styles.actions}>
          <Button onPress={hideDialog}>Cancel</Button>
          <View style={styles.rightButtons}>
            <Button
              style={{ marginRight: 8 }}
              mode="outlined"
              onPress={this.updatePatient}
            >
              Update
            </Button>
            <Button mode="contained" onPress={this.finishPatient}>
              Finish
            </Button>
          </View>
        </Dialog.Actions>
      </Dialog>
    );
  }
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 8 },
  actions: { marginHorizontal: 16, justifyContent: "space-between" },
  rightButtons: { flexDirection: "row" }
});
