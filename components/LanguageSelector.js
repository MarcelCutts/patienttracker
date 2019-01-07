import React from "react";
import { StyleSheet, Picker } from "react-native";
import { withNamespaces } from "react-i18next";

export const LanguageDropdown = ({ i18n }) => (
  <Picker
    style={styles.container}
    selectedValue={i18n.language.slice(0, 2)}
    onValueChange={itemValue => i18n.changeLanguage(itemValue)}
  >
    <Picker.Item label="Kreyòl 🇭🇹" value="ht" />
    <Picker.Item label="English 🇬🇧" value="en" />
  </Picker>
);

export const LanguageSelector = withNamespaces(["common"], { wait: true })(
  LanguageDropdown
);

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 50
  }
});
