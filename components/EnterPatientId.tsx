import React from "react";
import { StyleSheet } from "react-native";
import { Button, Dialog, TextInput, Divider } from "react-native-paper";

type Props = {
  visible: boolean;
  handlePatient: ({ data: string }) => void;
  hideDialog: () => void;
};

type State = {
  patientId: string;
};

export class EnterPatientId extends React.Component<Props, State> {
  state = {
    patientId: ""
  };

  render() {
    const { visible, hideDialog, handlePatient } = this.props;
    const { patientId } = this.state;
    return (
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Enter Patient ID?</Dialog.Title>
        <Dialog.Content>
          <TextInput
            mode="outlined"
            label="Patient ID"
            onChangeText={text => this.setState({ patientId: text })}
            value={patientId}
          />
        </Dialog.Content>
        <Divider />
        <Dialog.Actions style={styles.actions}>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button
            onPress={() => handlePatient({ data: patientId })}
            mode="contained"
          >
            Continue
          </Button>
        </Dialog.Actions>
      </Dialog>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 8
  },
  actions: { marginHorizontal: 16, justifyContent: "space-between" }
});
