import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Dialog, Paragraph, TextInput } from "react-native-paper";

type Props = {
  visible: boolean;
  token: { type: string; data: string };
  hideDialog: () => void;
  isManual: boolean;
  navigate: (destingation: string) => void;
};

type State = {
  patientId: string;
  comments: string;
};

export class AddPatient extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      patientId: "",
      comments: ""
    };
  }

  render() {
    const { visible, token, hideDialog, isManual = false } = this.props;
    return (
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Add patient to queue?</Dialog.Title>
        <Dialog.Content>
          <View style={styles.container}>
            <MaterialCommunityIcons name="qrcode" size={80} />
            {isManual ? (
              <TextInput
                style={styles.manualInput}
                mode="outlined"
                label="Patient ID"
                onChangeText={text => this.setState({ patientId: text })}
                value=""
              />
            ) : (
              <Paragraph>{token && token.data}</Paragraph>
            )}
          </View>

          <TextInput
            mode="outlined"
            label="Comments"
            onChangeText={text => this.setState({ comments: text })}
            value=""
          />
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={this.handlePatientAdd}>Add to queue</Button>
        </Dialog.Actions>
      </Dialog>
    );
  }

  handlePatientAdd = () => {
    const patientId =
      (this.props.token && this.props.token.data) || this.state.patientId;
    const comments = this.state.comments;
    this.props.navigate("Home");
    // return { patientId, comments };
  };
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 8 },
  manualInput: { flex: 1 }
});
