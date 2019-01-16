import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";

let data = [];
for (let i = 0; i < 20; i++) {
  data.push({ key: "Dave" + i });
}

const Row = ({ name }) => (
  <View style={styles.row}>
    <Text style={{ color: "white", padding: 10, fontSize: 18, height: 44 }}>
      {name}
    </Text>
  </View>
);

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Patients in queue 👩‍👩‍👦‍👦"
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.container}
          data={data}
          renderItem={({ item }) => <Row name={item.key} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  row: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginBottom: 10,
    backgroundColor: "#2196F3"
  }
});
