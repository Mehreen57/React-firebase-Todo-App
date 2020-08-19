import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CurrentDateHeader from "./CurrentDateHeader";

export default function Header() {
  return (
    <View style={styles.header}>
      <CurrentDateHeader />
      <View>
        <Text style={styles.header_title}>My Tasks</Text>
      </View>
    </View>
  );
}
// styles
const styles = StyleSheet.create({
  header: {
    paddingVertical: 30,
    marginHorizontal: 15,
  },
  header_title: {
    fontSize: 35,
    color: "#C6A569",
    textAlign: "center",
    paddingTop: 20,
  },
});
