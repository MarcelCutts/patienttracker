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

type Props = {
  visible: boolean;
  token: string;
  hideDialog: () => void;
  addPatient: (addEvent: any) => void;
};

type State = {
  comments: string;
};

export class AddPatient extends React.Component<Props, State> {
  state = {
    comments: ""
  };

  render() {
    const { visible, token, hideDialog, addPatient } = this.props;
    const { comments } = this.state;
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
            value={comments}
          />
        </Dialog.Content>
        <Divider />
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button
            onPress={() =>
              addPatient({
                id: token,
                comments
              })
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

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 8 },
  manualInput: { flex: 1 },
  actions: {
    justifyContent: "space-between"
  }
});
