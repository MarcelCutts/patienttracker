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
  token: string;
  hideDialog: () => void;
  navigate: (destingation: string) => void;
};

type State = {
  comments: string;
};

export class AddPatient extends React.Component<Props, State> {
  state = {
    comments: ""
  };

  render() {
    const { visible, token, hideDialog } = this.props;
    return (
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Add patient to queue?</Dialog.Title>
        <Dialog.Content>
          <View style={styles.container}>
            <MaterialCommunityIcons name="qrcode" size={80} />
            <Paragraph>{token}</Paragraph>
          </View>

          <TextInput
            mode="outlined"
            label="Comments"
            onChangeText={text => this.setState({ comments: text })}
            value={this.state.comments}
          />
        </Dialog.Content>
        <Divider />
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={this.addPatient} mode="contained">
            Add to queue
          </Button>
        </Dialog.Actions>
      </Dialog>
    );
  }

  addPatient = async () => {
    const patientId = this.props.token;
    const comments = this.state.comments;
    const user = JSON.parse(await AsyncStorage.getItem("user"));
    const entry: Patient = {
      staffName: user.name,
      facilityId: user.facilityId,
      stationId: user.stationId,
      timeStarted: Date.now(),
      id: patientId,
      comments
    };

    await AsyncStorage.setItem(`Patient-${patientId}`, JSON.stringify(entry));
    this.props.navigate("Home");
  };
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 8 },
  manualInput: { flex: 1 },
  actions: {
    justifyContent: "space-between"
  }
});
