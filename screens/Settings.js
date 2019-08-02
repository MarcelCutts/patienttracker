import * as React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import {
  Title,
  Divider,
  TextInput,
  Button,
  HelperText
} from "react-native-paper";
import { LanguageSelector } from "../components/LanguageSelector";
import { connect } from "react-redux";
import { uploadPatients, updateServerConfiguration } from "../state/actions";
import { withNamespaces } from "react-i18next";

export const SettingsComponent = ({
  server,
  error,
  isFetching,
  upload,
  updateServer,
  t
}) =>
  console.log("🚒", isFetching) || (
    <View style={styles.container}>
      <View>
        <Title>{t("settings:language")}</Title>
        <LanguageSelector />
      </View>
      <Divider style={{ margin: 24 }} />
      <KeyboardAvoidingView behavior="padding" enabled>
        <Title>{t("settings:details")} // Patients to upload</Title>
        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("settings:address")}
          value={server.address}
          onChangeText={text => updateServer({ ...server, address: text })}
        />

        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("settings:password")}
          value={server.password}
          onChangeText={text => updateServer({ ...server, password: text })}
        />

        {isFetching ? (
          <Button icon="schedule" mode="contained" disabled={true}>
            Uplading...
          </Button>
        ) : (
          <Button icon="save" mode="contained" onPress={upload}>
            {t("settings:update")}
          </Button>
        )}

        <HelperText type="error" visible={error}>
          Errorrr!
        </HelperText>
      </KeyboardAvoidingView>
    </View>
  );

const mapStateToProps = state => ({
  server: state.server,
  isFetching: state.patients.isFetching,
  error: state.patients.error
});

const mapDispatchToProps = dispatch => ({
  upload: () => dispatch(uploadPatients()),
  updateServer: config => dispatch(updateServerConfiguration(config))
});

export const SettingsScreen = withNamespaces(["settings"], { wait: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SettingsComponent)
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24
  },
  input: {
    marginBottom: 16,
    fontSize: 18
  }
});
