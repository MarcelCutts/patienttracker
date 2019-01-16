import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FAB, Portal } from "react-native-paper";
import { BarCodeScanner, Permissions } from "expo";
import { AddPatient } from "../components/AddPatient";
import { NavigationScreenProp } from "react-navigation";

type token = { type: string; data: string };

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  hasCameraPermission: null | boolean;
  visible: boolean;
  token: null | token;
  isManual: boolean;
}

export default class QrScreen extends React.Component<Props, State> {
  state = {
    hasCameraPermission: null,
    token: null,
    visible: false,
    isManual: false
  };

  async componentDidMount() {
    const { status }: { status: string } = await Permissions.askAsync(
      Permissions.CAMERA
    );
    this.setState({ hasCameraPermission: status === "granted" });
  }

  hideDialog = () => this.setState({ visible: false });

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        {!this.state.visible && (
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            style={StyleSheet.absoluteFill}
          />
        )}
        <FAB
          style={styles.fab}
          icon="create"
          label="Add manually"
          onPress={this.handleEnterManually}
        />
        <Portal>
          <AddPatient
            visible={this.state.visible}
            token={this.state.token}
            hideDialog={this.hideDialog}
            navigate={this.props.navigation.navigate}
            isManual={this.state.isManual}
          />
        </Portal>
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }: token) =>
    this.setState({ token: { type, data }, visible: true });

  handleEnterManually = () => this.setState({ isManual: true, visible: true });
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});
