import * as React from "react";
import { FlatList } from "react-native";
import { Text } from "react-native-paper";

export const PatientList = () => (
  <FlatList
    data={[{ key: "a" }, { key: "b" }]}
    renderItem={({ item }) => <Text>{item.key}</Text>}
  />
);
