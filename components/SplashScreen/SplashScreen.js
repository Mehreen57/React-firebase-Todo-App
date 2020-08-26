import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function SplashScreen() {
  return (
    <View style={styles.main_container}>
      <Image source={require("../../assets/splash-icon.png")} />
      <Text style={styles.splash_title}>TodoApp</Text>

      <View style={styles.developed_by_container}>
        <Text style={styles.developed_by}>Developed by Mehreen Fayaz with</Text>
        <FontAwesome5 style={styles.heart} name="heart" />
      </View>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  main_container: {
    position: "relative",
    backgroundColor: "#2D2D2D",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  splash_title: {
    color: "#C6A569",
    fontSize: 20,
    paddingTop: 20,
  },

  developed_by_container: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 15,
  },

  developed_by: {
    color: "#C6A569",
    fontSize: 16,
  },

  heart: {
    top: 2,
    paddingLeft: 7,
    color: "red",
    fontSize: 16,
  },
});
