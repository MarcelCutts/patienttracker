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
        data={[
          { key: "Devin" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" }
        ]}
        renderItem={({ item }) => (
          <>
            <List.Item
              title={item.key}
              description="Started at 18:22"
              right={() => (
                <Button
                  style={{ alignSelf: "center" }}
                  mode="outlined"
                  icon="edit"
                >
                  edit
                </Button>
              )}
            />
            <Divider inset />
          </>
          // <Card elevation={4} style={styles.item}>
          //   <Card.Content>
          //     <Title>{item.key}</Title>
          //     <Subheading>Started at 17:40</Subheading>
          //   </Card.Content>
          // </Card>
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
