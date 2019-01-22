import * as React from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Card, Title, Text, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { Patient, State } from "../types";

interface Props {
  patients: Array<Patient>;
}

export const PatientsCardComponent = ({ patients }: Props) => {
  const completed = patients.filter(p => !!p.timeEnded).length;
  const inQueue = patients.length - completed;
  return (
    <Card elevation={2}>
      <Card.Content style={styles.content}>
        <View style={styles.userIcon}>
          <MaterialIcons name="person" size={60} />
        </View>
        <View>
          <Title>Patients</Title>
          <Text>{inQueue} patients in queue</Text>
          <Text>{completed} patients finished</Text>
        </View>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => undefined}>Upload</Button>
      </Card.Actions>
    </Card>
  );
};

const mapStateToProps = (state: State) => ({
  patients: state.patients
});

export const PatientsCard = connect(mapStateToProps)(PatientsCardComponent);

const styles = StyleSheet.create({
  content: {
    flexDirection: "row"
  },
  userIcon: {
    paddingRight: 12,
    alignSelf: "center"
  }
});
