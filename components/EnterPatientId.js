import React from "react";
import { StyleSheet } from "react-native";
import { Button, Dialog, TextInput, Divider } from "react-native-paper";
import { withNamespaces } from "react-i18next";

export class EnterPatientIdComponent extends React.Component {
  state = {
    patientId: ""
  };

  render() {
    const { t } = this.props;
    const { visible, hideDialog, handlePatient } = this.props;
    const { patientId } = this.state;
    return (
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>{t("enter:enterID")}</Dialog.Title>
        <Dialog.Content>
          <TextInput
            mode="outlined"
            label={t("enter:id")}
            onChangeText={text => this.setState({ patientId: text })}
            value={patientId}
          />
        </Dialog.Content>
        <Divider />
        <Dialog.Actions style={styles.actions}>
          <Button onPress={hideDialog}>{t("enter:cancel")}</Button>
          <Button
            onPress={() => handlePatient({ data: patientId })}
            mode="contained"
          >
            {t("enter:continue")}
          </Button>
        </Dialog.Actions>
      </Dialog>
    );
  }
}

export const EnterPatientId = withNamespaces("enter", { wait: true})(EnterPatientIdComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 8
  },
  actions: { marginHorizontal: 16, justifyContent: "space-between" }
});
