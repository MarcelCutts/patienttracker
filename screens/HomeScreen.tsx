import * as React from "react";
import { NavigationScreenProp, createStackNavigator } from "react-navigation";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { withNamespaces, WithNamespaces } from "react-i18next";
import { FAB } from "react-native-paper";
import { LanguageSelector } from "../components/LanguageSelector";
import { UserCard } from "../components/UserCard";
import QrScreen from "./QrScreen";
import { PatientsCard } from "../components/PatientsCard";
import { Patient } from "../types";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface User {
  name: string;
  stationId: string;
  facilityId: string;
}

interface State {
  user: null | User;
  patients: Array<Patient>;
}

export default class HomeScreen extends React.Component<
  Props & WithNamespaces,
  State
> {
  state = { user: null, patients: [] };

  static navigationOptions = {
    title: "Patient Tracker",
    headerRight: <LanguageSelector />
  };

  updateUser = async () => {
    await AsyncStorage.removeItem("user");
    this.props.navigation.navigate("UserSignIn");
  };

  updatePatient = async () => {};

  componentDidMount = async () => {
    let user = JSON.parse(await AsyncStorage.getItem("user"));
    const patientKeys = (await AsyncStorage.getAllKeys()).filter(k =>
      k.startsWith("Patient-")
    );
    const patients = (await AsyncStorage.multiGet(patientKeys)).map(p =>
      JSON.parse(p[1])
    );

    this.setState({ patients, user });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <UserCard user={this.state.user} updateUser={this.updateUser} />
          <PatientsCard patients={this.state.patients} />
        </View>
        <FAB
          style={styles.fab}
          icon="camera-alt"
          onPress={() => navigation.navigate("Qr")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  user: {
    margin: 16
  },
  fab: {
    position: "absolute",
    margin: 24,
    right: 0,
    bottom: 0
  }
});
