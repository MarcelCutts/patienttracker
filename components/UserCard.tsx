import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Text, Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

export const UserCard = ({ user, updateUser }) =>
  user && (
    <Card elevation={2}>
      <Card.Content style={styles.content}>
        <View style={styles.userIcon}>
          <MaterialIcons name="person" size={60} />
        </View>
        <View>
          <Title>{user.staffName}</Title>
          <Text>
            <Text style={styles.subtle}>Station</Text> {user.stationId}
          </Text>
          <Text>
            <Text style={styles.subtle}>Facility</Text> {user.facilityId}
          </Text>
        </View>
      </Card.Content>
      <Card.Actions>
        <Button onPress={updateUser}>Update</Button>
      </Card.Actions>
    </Card>
  );

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    marginBottom: 8
  },
  userIcon: {
    paddingRight: 12,
    alignSelf: "center"
  },
  subtle: {
    color: "rgba(0,0,0,0.5)"
  }
});
