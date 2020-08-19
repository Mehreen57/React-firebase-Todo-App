import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footer_title}>
        Designed and developed by Mehreen Fayaz
      </Text>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#274e0e",
    paddingVertical: 15,
    position: "absolute",
    left: "0",
    right: "0",
    bottom: "0",
  },
  footer_title: {
    color: "#fff",
    textAlign: "center",
  },
});
