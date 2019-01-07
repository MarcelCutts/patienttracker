// @flow
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  FAB,
  Button,
  Portal,
  Dialog,
  Paragraph,
  TextInput
} from "react-native-paper";
import { BarCodeScanner, Permissions, Icon } from "expo";

export default class QrScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    token: null,
    visible: false
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
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
      <View style={{ flex: 1 }}>
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
          onPress={() => undefined}
        />
        <Portal>
          <Dialog visible={this.state.visible} onDismiss={this.hideDialog}>
            <Dialog.Title>Add patient to queue?</Dialog.Title>
            <Dialog.Content>
              <View style={{ flexDirection: "row", marginBottom: 8 }}>
                <Icon.MaterialCommunityIcons name="qrcode" size={60} />
                <Paragraph>
                  {this.state.token && this.state.token.data}
                </Paragraph>
              </View>
              <TextInput
                mode="outlined"
                label="Comments"
                onChangeText={text => this.setState({ stationId: text })}
                value=""
              />
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={this.hideDialog}>Cancel</Button>
              <Button onPress={this.hideDialog}>Add to queue</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ token: { type, data }, visible: true });
  };
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  }
});
