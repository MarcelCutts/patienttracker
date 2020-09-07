import * as React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import {
  Subheading,
  List,
  Headline,
  Divider,
  Button,
  Portal,
} from "react-native-paper";
import { EditPatient } from "./EditPatient";
import { withNamespaces } from "react-i18next";

export class PatientListCoponent extends React.Component {
  state = {
    selectedPatient: null,
  };

  hideDialog = () => this.setState({ selectedPatient: null });
  completeDialog = () => this.setState({ selectedPatient: null });

  render() {
    const { patients, editPatient, t } = this.props;
    if (!patients || !patients.length) return null;
    const { selectedPatient } = this.state;
    const inQueue = patients.filter((p) => !p.timeFinished);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Headline>{t("home:patients")}</Headline>
          <Subheading>
            {inQueue.length} {t("home:inQueue")}{" "}
            {patients.length - inQueue.length} {t("home:completed")}
          </Subheading>
        </View>
        <FlatList
          data={inQueue}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <List.Item
                title={item.id}
                description={`${t("home:startedAt")} ${new Date(
                  item.timeStarted
                ).toLocaleTimeString()}`}
                right={() => (
                  <Button
                    style={styles.button}
                    mode="outlined"
                    icon="account-edit"
                    onPress={() => this.setState({ selectedPatient: item })}
                  >
                    {t("home:edit")}
                  </Button>
                )}
              />
              <Divider inset />
            </>
          )}
        />

        <Portal>
          {selectedPatient && (
            <EditPatient
              visible={!!selectedPatient}
              patient={selectedPatient}
              hideDialog={this.hideDialog}
              completeDialog={this.completeDialog}
              editPatient={editPatient}
            />
          )}
        </Portal>
      </View>
    );
  }
}

export const PatientList = withNamespaces("home", { wait: true })(
  PatientListCoponent
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginLeft: 16,
  },
  button: { alignSelf: "center" },
});
