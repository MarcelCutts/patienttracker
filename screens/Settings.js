import * as React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Title, Divider, TextInput, Button } from "react-native-paper";
import { LanguageSelector } from "../components/LanguageSelector";
import { connect } from "react-redux";
import { uploadPatients, updateServerConfiguration } from "../state/actions";

export class SettingsComponent extends React.Component {
  state = { server: this.props.server };

  render() {
    const { upload, updateServer } = this.props;
    const { server } = this.state;

    return (
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
            value={server.address}
            onChangeText={text =>
              this.setState({ server: { ...server, address: text } })
            }
            onBlur={() => updateServer(this.state.server)}
          />

          <TextInput
            mode="outlined"
            style={styles.input}
            label="Password"
            value={server.password}
            onChangeText={text =>
              this.setState({ server: { ...server, password: text } })
            }
            onBlur={() => updateServer(this.state.server)}
          />

          <Button icon="save" mode="contained" onPress={upload}>
            Upload
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

export const SettingsScreen = connect(
  mapStateToProps,
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
