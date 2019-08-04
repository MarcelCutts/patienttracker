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

export class EditPatientComponent extends React.Component {
  state = {
    comments: this.props.patient && this.props.patient.comments
  };

  updatePatient = async () => {
    const { patient, editPatient, completeDialog } = this.props;
    const updatedPatient = {
      ...patient,
      comments: this.state.comments
    };

    editPatient(updatedPatient);
    completeDialog();
  };

  finishPatient = () => {
    const { patient, editPatient, completeDialog } = this.props;
    const finishedPatient = {
      ...patient,
      timeFinished: Date.now()
    };

    editPatient(finishedPatient);
    completeDialog();
  };

  render() {
    const { visible, patient, hideDialog } = this.props;
    const { t } = this.props;
    return (
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{t("edit:editPatient")}</Dialog.Title>
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
          <Button onPress={hideDialog}>{t("edit:cancel")}</Button>
          <View style={styles.rightButtons}>
            <Button
              style={styles.updateButton}
              mode="outlined"
              onPress={this.updatePatient}
            >
              {t("edit:update")}
            </Button>
            <Button mode="contained" onPress={this.finishPatient}>
              {t("edit:finish")}
            </Button>
          </View>
        </Dialog.Actions>
      </Dialog>
    );
  }
}

export const EditPatient = withNamespaces("edit", { wait: true })(
  EditPatientComponent
);

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginBottom: 8 },
  actions: { marginHorizontal: 16, justifyContent: "space-between" },
  rightButtons: { flexDirection: "row" },
  updateButton: { marginRight: 8 }
});
