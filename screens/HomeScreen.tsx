import * as React from "react";
import { NavigationScreenProp } from "react-navigation";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { withNamespaces, WithNamespaces } from "react-i18next";
import { FAB } from "react-native-paper";
import { LanguageSelector } from "../components/LanguageSelector";
import { UserCard } from "../components/UserCard";

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
}

class HomeScreen extends React.Component<Props & WithNamespaces, State> {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  static navigationOptions = {
    title: "Patient Tracker",
    headerRight: <LanguageSelector />
  };

  updateUser = async () => {
    await AsyncStorage.removeItem("user");
    this.props.navigation.navigate("UserSignIn");
  };

  componentDidMount = async () => {
    let user = await AsyncStorage.getItem("user");
    this.setState({ user: JSON.parse(user) });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.user}>
          <UserCard user={this.state.user} updateUser={this.updateUser} />
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

export default withNamespaces(["home", "common"], { wait: true })(HomeScreen);

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
    margin: 16,
    right: 0,
    bottom: 0
  }
});
