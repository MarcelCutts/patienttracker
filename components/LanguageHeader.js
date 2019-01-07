// @flow
import * as React from "react";
import { Appbar } from "react-native-paper";
import { LanguageSelector } from "./LanguageSelector";

export class LanguageHeader extends React.Component {
  render() {
    return (
      <Appbar.Header>
        <Appbar.Content title="Patient tracker" />
        <LanguageSelector />
      </Appbar.Header>
    );
  }
}
