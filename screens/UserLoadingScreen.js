import * as React from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import { connect } from "react-redux";

class UserLoadingScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = () => {
    const { user, navigation } = this.props;

    navigation.navigate(!!user ? "Home" : "UserSignIn");
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export const UserLoadingScreen = connect(mapStateToProps)(
  UserLoadingScreenComponent
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
