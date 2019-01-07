import * as React from "react";
import {
  Button,
  StyleSheet,
  AsyncStorage,
  TextInput,
  View
} from "react-native";
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
          style={styles.input}
          editable={true}
          onChangeText={text => this.setState({ name: text })}
          value={this.state.name}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          editable={true}
          onChangeText={text => this.setState({ stationId: text })}
          value={this.state.stationId}
          placeholder="Station ID"
        />
        <TextInput
          style={styles.input}
          editable={true}
          onChangeText={text => this.setState({ faciliyId: text })}
          value={this.state.faciliyId}
          placeholder="Facility ID"
        />
        <Button style={styles.button} title="Sign in" onPress={this.signIn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 18,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    fontSize: 24,
    width: "90%",
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    fontSize: 28,
    height: 44
  }
});
