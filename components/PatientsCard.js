import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Headline, Subheading } from "react-native-paper";
import { withNamespaces } from "react-i18next";

export const PatientsCard = ({ patients }) => {
  const completed = patients.filter(p => !!p.timeEnded).length;
  const inQueue = patients.length - completed;
  return (
    <View style={styles.container}>
      <Headline>Patients</Headline>
      <Subheading>
        {inQueue} in queue, {completed} completed
      </Subheading>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 0
  },
  text: {
    fontSize: 32
  }
});
