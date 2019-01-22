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
import { Patient } from "../types";

type Props = {
  visible: boolean;
  patient: Patient;
  hideDialog: () => void;
};

export const ViewPatient = ({ visible, hideDialog, patient }: Props) => (
  <Dialog visible={visible} onDismiss={hideDialog}>
    <Dialog.Title>Completed patient</Dialog.Title>
    <Dialog.Content>
      <View style={styles.container}>
        <MaterialCommunityIcons name="qrcode" size={80} />
        <Paragraph>{patient.id}</Paragraph>
      </View>

      <TextInput
        mode="outlined"
        label="Comments"
        disabled
        value={patient.comments}
      />
    </Dialog.Content>
    <Divider />
    <Dialog.Actions>
      <Button onPress={hideDialog}>Back</Button>
    </Dialog.Actions>
  </Dialog>
);

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 8 }
});
