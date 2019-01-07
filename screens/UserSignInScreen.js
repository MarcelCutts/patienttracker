import * as React from "react";
import { StyleSheet, AsyncStorage, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { createStackNavigator } from "react-navigation";
import { withNamespaces } from "react-i18next";
import { LanguageSelector } from "../components/LanguageSelector";

export class UserSignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      stationId: "",
      faciliyId: ""
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
          onChangeText={text => this.setState({ faciliyId: text })}
          value={this.state.faciliyId}
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
