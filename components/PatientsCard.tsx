import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Title, Text, Headline, Card } from "react-native-paper";
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
      <Text style={styles.text}>{inQueue} in queue</Text>
      <Text style={styles.text}>{completed} completed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16
  },
  text: {
    fontSize: 32
  }
});
