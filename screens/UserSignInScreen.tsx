import * as React from "react";
import { StyleSheet, AsyncStorage, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { createStackNavigator, NavigationScreenProp } from "react-navigation";
import { withNamespaces } from "react-i18next";
import i18n from "i18next";
import { LanguageSelector } from "../components/LanguageSelector";

interface Props {
  navigation: NavigationScreenProp<any, any>;
  t: i18n.TranslationFunction;
}

interface State {
  name: string;
  stationId: string;
  facilityId: string;
}

export class UserSignInScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      stationId: "",
      facilityId: ""
    };
  }

  static navigationOptions = ({ screenProps }) => ({
    title: screenProps.t("signIn:title"),
    headerRight: <LanguageSelector />
  });

  signIn = async () => {
    const { name, stationId, facilityId } = this.state;
    await AsyncStorage.setItem(
      "user",
      JSON.stringify({
        name,
        stationId,
        facilityId
      })
    );
    this.props.navigation.navigate("Main");
  };

  render() {
    const { t, navigation } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("signIn:name")}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
        />
        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("signIn:stationId")}
          onChangeText={text => this.setState({ stationId: text })}
          value={this.state.stationId}
        />
        <TextInput
          mode="outlined"
          style={styles.input}
          label={t("signIn:facilityId")}
          onChangeText={text => this.setState({ facilityId: text })}
          value={this.state.facilityId}
        />
        <Button
          icon="portrait"
          mode="contained"
          onPress={() => navigation.navigate("Main")}
        >
          {t("signIn:signIn")}
        </Button>
      </View>
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
