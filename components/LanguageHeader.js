import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { LanguageSelector } from "./LanguageSelector";

export const LanguageHeader = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <LanguageSelector />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    flex: 1,
    fontSize: Platform.OS === "ios" ? 17 : 20,
    fontWeight: Platform.OS === "ios" ? "600" : "500",
    color: "rgba(0, 0, 0, .9)",
    marginHorizontal: 16
  }
});
