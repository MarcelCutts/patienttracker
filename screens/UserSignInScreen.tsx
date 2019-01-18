import * as React from "react";
import { StyleSheet, AsyncStorage, KeyboardAvoidingView } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { createStackNavigator, NavigationScreenProp } from "react-navigation";
import { withNamespaces, WithNamespaces } from "react-i18next";
import i18n from "i18next";
import { LanguageSelector } from "../components/LanguageSelector";

interface Props {
  navigation: NavigationScreenProp<any, any>;
  t: i18n.TranslationFunction;
}

interface RequiredField {
  value: string;
  error: boolean;
}

interface State {
  name: RequiredField;
  stationId: RequiredField;
  facilityId: RequiredField;
}

type FieldNames = "name" | "stationId" | "facilityId";

export class UserSignInScreen extends React.Component<
  Props & WithNamespaces,
  State
> {
  constructor(props: Props & WithNamespaces) {
    super(props);
    this.state = {
      name: { value: "", error: false },
      stationId: { value: "", error: false },
      facilityId: { value: "", error: false }
    };
  }

  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t("signIn:title"),
    headerRight: <LanguageSelector />
  });

  updateField(text: string, fieldName: FieldNames) {
    this.setState({ [fieldName]: { value: text, error: false } } as Pick<
      State,
      keyof State
    >);
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

  signIn = async () => {
    if (!this.areFieldsValid()) return;

    const { name, stationId, facilityId } = this.state;
    await AsyncStorage.setItem(
      "user",
      JSON.stringify({
        name: name.value,
        stationId: stationId.value,
        facilityId: facilityId.value
      })
    );
    this.props.navigation.navigate("Main");
  };

  render() {
    const { t } = this.props;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("signIn:name")}
          onChangeText={text => this.updateField(text, "name")}
          error={this.state.name.error}
          value={this.state.name.value}
        />

        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("signIn:stationId")}
          onChangeText={text => this.updateField(text, "stationId")}
          value={this.state.stationId.value}
          error={this.state.stationId.error}
        />

        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("signIn:facilityId")}
          onChangeText={text => this.updateField(text, "facilityId")}
          value={this.state.facilityId.value}
          error={this.state.facilityId.error}
        />

        <HelperText type="error" visible={this.state.name.error}>
          Please enter all details
        </HelperText>

        <Button icon="portrait" mode="contained" onPress={this.signIn}>
          {t("signIn:signIn")}
        </Button>
      </KeyboardAvoidingView>
    );
  }
}

export const UserSignInStack = createStackNavigator({
  UserSignIn: withNamespaces(["signIn"], { wait: true })(UserSignInScreen)
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: "70%",
    marginBottom: 16,
    fontSize: 18
  }
});
