import * as React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { createStackNavigator } from "react-navigation-stack";
import { withNamespaces } from "react-i18next";
import { connect } from "react-redux";
import { LanguageSelector } from "../components/LanguageSelector";
import { setUser } from "../state/actions";

export class UserSignInScreen extends React.Component {
  state = {
    name: { value: "", error: false },
    stationId: { value: "", error: false },
    facilityId: { value: "", error: false },
  };

  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t("signIn:title"),
    headerRight: <LanguageSelector />,
  });

  updateField(text, fieldName) {
    this.setState({ [fieldName]: { value: text, error: false } });
  }

  areFieldsValid = () => {
    let isValid = true;
    if (this.state.name.value.length === 0) {
      isValid = false;
      this.setState({ name: { ...this.state.name, error: true } });
    }
    if (!this.state.stationId.value) {
      isValid = false;
      this.setState({ stationId: { ...this.state.stationId, error: true } });
    }
    if (!this.state.facilityId.value) {
      isValid = false;
      this.setState({ facilityId: { ...this.state.facilityId, error: true } });
    }
    return isValid;
  };

  signIn = () => {
    if (!this.areFieldsValid()) return;

    const { name, stationId, facilityId } = this.state;
    this.props.setUser({
      staffName: name.value,
      stationId: stationId.value,
      facilityId: facilityId.value,
    });

    this.props.navigation.navigate("Home");
  };

  render() {
    const { t } = this.props;
    const { name, facilityId, stationId } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("signIn:name")}
          onChangeText={(text) => this.updateField(text, "name")}
          error={this.state.name.error}
          value={this.state.name.value}
        />

        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("signIn:stationId")}
          onChangeText={(text) => this.updateField(text, "stationId")}
          value={this.state.stationId.value}
          error={this.state.stationId.error}
        />

        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("signIn:facilityId")}
          onChangeText={(text) => this.updateField(text, "facilityId")}
          value={this.state.facilityId.value}
          error={this.state.facilityId.error}
        />

        <HelperText
          type="error"
          visible={name.error || stationId.error || facilityId.error}
        >
          {t("signIn:error")}
        </HelperText>

        <Button icon="login" mode="contained" onPress={this.signIn}>
          {t("signIn:signIn")}
        </Button>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
});

export const UserSignInStack = createStackNavigator({
  UserSignIn: withNamespaces(["signIn"], { wait: true })(
    connect(null, mapDispatchToProps)(UserSignInScreen)
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "70%",
    marginBottom: 16,
    fontSize: 18,
  },
});
