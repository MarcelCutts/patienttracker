import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Title, Text, Headline, Card, Subheading } from "react-native-paper";
import { Patient } from "../types";

interface Props {
  patients: Array<Patient>;
}

export const PatientsCard = ({ patients }: Props) => {
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
