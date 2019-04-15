import * as React from "react";
import { Appbar } from "react-native-paper";

export default class MyComponent extends React.Component {
  render() {
    return (
      <Appbar.Header>
        <Appbar.Content title="Patient tracker" subtitle="Home" />
        <Appbar.Action
          icon="settings"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
      </Appbar.Header>
    );
  }
}
