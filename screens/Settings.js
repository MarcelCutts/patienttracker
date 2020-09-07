import * as React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import {
  Title,
  Divider,
  TextInput,
  Button,
  Text,
  Subheading,
  DefaultTheme,
} from "react-native-paper";
import { LanguageSelector } from "../components/LanguageSelector";
import { connect } from "react-redux";
import { uploadPatients, updateServerConfiguration } from "../state/actions";
import { withNamespaces } from "react-i18next";
import Constants from "expo-constants";

export const SettingsComponent = ({
  server,
  error,
  isFetching,
  upload,
  updateServer,
  completedPatients,
  t,
}) => (
  <View style={styles.container}>
    <View>
      <Title>{t("settings:language")}</Title>
      <LanguageSelector />
    </View>
    <Divider style={styles.divider} />
    <KeyboardAvoidingView behavior="padding" enabled>
      <Title>{t("settings:details")}</Title>
      <Subheading>
        {completedPatients.length} {t("settings:patientsCompleted")}
      </Subheading>

      <View style={styles.upload}>
        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("settings:address")}
          value={server.address}
          onChangeText={(text) => updateServer({ ...server, address: text })}
        />

        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("settings:password")}
          value={server.password}
          onChangeText={(text) => updateServer({ ...server, password: text })}
        />

        {isFetching ? (
          <Button icon="schedule" mode="contained" disabled={true}>
            {t("settings:uploading")}
          </Button>
        ) : (
          <Button
            icon="upload"
            mode="contained"
            onPress={upload}
            disabled={completedPatients.length === 0}
          >
            {t("settings:upload")}
          </Button>
        )}

        <Button
          icon="upload"
          mode="contained"
          style={styles.specialUploadButton}
          onPress={upload}
          disabled={completedPatients.length === 0}
        >
          DEBUG upload (be patient!)
        </Button>

        {error ? (
          <Text type="error" style={styles.errorMessage}>
            {t(error)}
          </Text>
        ) : null}
      </View>
    </KeyboardAvoidingView>
    <Text> App version: {Constants.manifest.version} </Text>
  </View>
);

const mapStateToProps = (state) => ({
  server: state.server,
  isFetching: state.patients.isFetching,
  error: state.patients.error,
  completedPatients: state.patients.queue.filter((p) => p.timeFinished),
});

const mapDispatchToProps = (dispatch) => ({
  upload: () => dispatch(uploadPatients()),
  updateServer: (config) => dispatch(updateServerConfiguration(config)),
});

export const SettingsScreen = withNamespaces(["settings"], { wait: true })(
  connect(mapStateToProps, mapDispatchToProps)(SettingsComponent)
);

// TODO: Change theme usage to be from provider
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  divider: {
    margin: 24,
  },
  upload: {
    marginTop: 16,
  },
  specialUploadButton: {
    marginTop: 16,
    marginBottom: 16,
  },
  errorMessage: {
    color: DefaultTheme.colors.error,
  },
  input: {
    marginBottom: 16,
    fontSize: 18,
  },
});
