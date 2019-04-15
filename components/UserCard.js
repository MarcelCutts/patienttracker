import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Title, Text, Button, Avatar } from "react-native-paper";

const getInitials = name => {
  const nameParts = name.split(" ");

  if (nameParts.length === 1) return name[0];

  const [firstName, lastName] = [nameParts[0], nameParts[nameParts.length - 1]];
  return firstName[0] + lastName[0];
};

export const UserCard = ({ user, updateUser }) =>
  user && (
    <Card elevation={4}>
      <Card.Content style={styles.content}>
        <View style={styles.userIcon}>
          <Avatar.Text label={getInitials(user.staffName)} size={64} />
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
      <Card.Actions style={{ alignSelf: "flex-end" }}>
        <Button icon="update" onPress={updateUser}>
          Update
        </Button>
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
