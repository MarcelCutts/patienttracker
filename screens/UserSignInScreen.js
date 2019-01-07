import * as React from "react";
import { StyleSheet, AsyncStorage, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { createStackNavigator } from "react-navigation";
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

  static navigationOptions = {
    title: "Please sign in",
    headerRight: <LanguageSelector />
  };

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
    const { t, i18n, navigation } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          style={styles.input}
          label="Name"
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
        />
        <TextInput
          mode="outlined"
          style={styles.input}
          label="Station ID"
          onChangeText={text => this.setState({ stationId: text })}
          value={this.state.stationId}
        />
        <TextInput
          mode="outlined"
          style={styles.input}
          label="Facility ID"
          onChangeText={text => this.setState({ faciliyId: text })}
          value={this.state.faciliyId}
        />
        <Button
          icon="portrait"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Sign in
        </Button>
      </View>
    );
  }
}

export const UserSignInStack = createStackNavigator({
  UserSignIn: UserSignInScreen
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
