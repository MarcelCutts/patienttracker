import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Text, Button, Subheading } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

export const UserCard = () => (
  <Card elevation={2}>
    <Card.Content style={styles.content}>
      <View style={styles.userIcon}>
        <MaterialIcons name="person" size={60} />
      </View>
      <View>
        <Title>Marcel Cutts</Title>
        <Text>Station: 13133</Text>
        <Text>Facility: 42414</Text>
      </View>
    </Card.Content>
    <Card.Actions>
      <Button>Update</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  content: {
    flexDirection: "row"
  },
  userIcon: {
    paddingRight: 12,
    alignSelf: "center"
  }
});
