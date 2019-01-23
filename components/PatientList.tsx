import * as React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import {
  Text,
  Card,
  Title,
  Subheading,
  List,
  Headline,
  Divider,
  Button
} from "react-native-paper";
import { Patient } from "../types";

interface Props {
  patients: Array<Patient>;
}

export const PatientList = ({ patients }: Props) => {
  const completed = patients.filter(p => !!p.timeEnded).length;
  const inQueue = patients.length - completed;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Headline>Patients</Headline>
        <Subheading>
          {inQueue} in queue, {completed} completed
        </Subheading>
      </View>
      <FlatList
        data={patients}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <List.Item
              title={item.id}
              description="Started at 18:22"
              right={() =>
                item.timeEnded ? (
                  <Button
                    style={{ alignSelf: "center" }}
                    mode="outlined"
                    icon="pageview"
                    onPress={() => undefined}
                  >
                    view
                  </Button>
                ) : (
                  <Button
                    style={{ alignSelf: "center" }}
                    mode="outlined"
                    icon="edit"
                    onPress={() => undefined}
                  >
                    edit
                  </Button>
                )
              }
            />
            <Divider inset />
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginLeft: 16
  },
  item: {
    margin: 5
  }
});
