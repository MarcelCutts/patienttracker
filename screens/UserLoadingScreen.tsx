import * as React from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";
import { Store, User } from "../types";

interface Props {
  navigation: NavigationScreenProp<any, any>;
  user: User;
}

class UserLoadingScreenComponent extends React.Component<Props> {
  constructor(props: Props) {
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

const mapStateToProps = (state: Store) => ({
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
