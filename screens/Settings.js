import * as React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Title, Divider, TextInput, Button } from "react-native-paper";
import { LanguageSelector } from "../components/LanguageSelector";
import { connect } from "react-redux";
import { uploadPatients, updateServerConfiguration } from "../state/actions";
import { withNamespaces } from "react-i18next";

export class SettingsComponent extends React.Component {
  state = { server: this.props.server };

  render() {
    const { upload, updateServer, t } = this.props;
    const { server } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Title>{t("settings:language")}</Title>
          <LanguageSelector />
        </View>
        <Divider style={{ margin: 24 }} />
        <KeyboardAvoidingView behavior="padding" enabled>
          <Title>{t("settings:details")}</Title>
          <TextInput
            mode="outlined"
            style={styles.input}
            label={t("settings:address")}
            value={server.address}
            onChangeText={text =>
              this.setState({ server: { ...server, address: text } })
            }
            onBlur={() => updateServer(this.state.server)}
          />

          <TextInput
            mode="outlined"
            style={styles.input}
            label={t("settings:password")}
            value={server.password}
            onChangeText={text =>
              this.setState({ server: { ...server, password: text } })
            }
            onBlur={() => updateServer(this.state.server)}
          />

          <Button icon="save" mode="contained" onPress={upload}>
            {t("settings:update")}
          </Button>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  server: state.server
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
