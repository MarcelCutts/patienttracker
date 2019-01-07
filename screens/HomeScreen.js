import * as React from "react";
import { StyleSheet, View } from "react-native";
import { withNamespaces } from "react-i18next";
import { FAB } from "react-native-paper";
import { LanguageSelector } from "../components/LanguageSelector";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Patient Tracker",
    headerRight: <LanguageSelector />
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});
