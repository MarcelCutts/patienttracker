import * as React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Title, Divider, TextInput, Button } from "react-native-paper";
import { LanguageSelector } from "../components/LanguageSelector";
import { connect } from "react-redux";
import { uploadPatients } from "../state/actions";

export const SettingsComponent = ({ upload }) => (
  <View style={styles.container}>
    <View>
      <Title>Language</Title>
      <LanguageSelector />
    </View>
    <Divider style={{ margin: 24 }} />
    <KeyboardAvoidingView behavior="padding" enabled>
      <Title>Server details</Title>
      <TextInput
        mode="outlined"
        style={styles.input}
        label="Address"
        onChangeText={text => this.updateField(text, "name")}
      />

      <TextInput
        mode="outlined"
        style={styles.input}
        label="Password"
        onChangeText={text => this.updateField(text, "facilityId")}
      />

      <Button icon="save" mode="contained" onPress={upload}>
        Upload
      </Button>
    </KeyboardAvoidingView>
  </View>
);

const mapDispatchToProps = dispatch => ({
  upload: () => dispatch(uploadPatients())
});

export const SettingsScreen = connect(
  null,
  mapDispatchToProps
)(SettingsComponent);

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
