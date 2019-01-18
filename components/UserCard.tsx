import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Text, Button, Subheading } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

export const UserCard = ({ user, updateUser }) =>
  user && (
    <Card elevation={2}>
      <Card.Content style={styles.content}>
        <View style={styles.userIcon}>
          <MaterialIcons name="person" size={60} />
        </View>
        <View>
          <Title>{user.name}</Title>
          <Text>Station: {user.stationId}</Text>
          <Text>Facility: {user.facilityId}</Text>
        </View>
      </Card.Content>
      <Card.Actions>
        <Button onPress={updateUser}>Update</Button>
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
