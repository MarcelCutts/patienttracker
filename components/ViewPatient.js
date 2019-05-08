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
import { withNamespaces } from "react-i18next";

export const ViewPatientComponent = ({ visible, hideDialog, patient, t }) => (
  <Dialog visible={visible} onDismiss={hideDialog}>
    <Dialog.Title>{t("complete:completedPatient")}</Dialog.Title>
    <Dialog.Content>
      <View style={styles.container}>
        <MaterialCommunityIcons name="qrcode" size={80} />
        <Paragraph>{patient.id}</Paragraph>
      </View>

      <TextInput
        mode="outlined"
        label={t("complete:comments")}
        disabled
        value={patient.comments}
      />
    </Dialog.Content>
    <Divider />
    <Dialog.Actions>
      <Button onPress={hideDialog}>{t("complete:back")}</Button>
    </Dialog.Actions>
  </Dialog>
);

export const ViewPatient = withNamespaces("complete", { wait : true })(ViewPatientComponent);

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 8 }
});
