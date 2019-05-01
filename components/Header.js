import * as React from "react";
import { Appbar } from "react-native-paper";
import { withNamespaces } from "react-i18next";

export class HeaderComponent extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <Appbar.Header>
        <Appbar.Content title={t("home:title")} subtitle={t("home:home")} />
        <Appbar.Action
          icon="settings"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
      </Appbar.Header>
    );
  }
};

export default withNamespaces("home", { wait: true })(HeaderComponent);