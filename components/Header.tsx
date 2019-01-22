import * as React from "react";
import { Appbar } from "react-native-paper";

export default class MyComponent extends React.Component {
  _goBack = () => console.log("Went back");

  _onSearch = () => console.log("Searching");

  _onMore = () => console.log("Shown more");

  render() {
    return (
      <Appbar.Header>
        <Appbar.BackAction onPress={this._goBack} />
        <Appbar.Content title="Patient tracker" subtitle="Home" />
        <Appbar.Action icon="search" onPress={this._onSearch} />
        <Appbar.Action icon="more-vert" onPress={this._onMore} />
      </Appbar.Header>
    );
  }
}
