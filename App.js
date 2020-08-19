import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/TodoComponents/Header";
import NavigationBar from "./components/Navigation/NavigationBar";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="default-content"
        // dark-content, light-content and default
        hidden={false}
        //To hide statusBar
        backgroundColor="transparent"
        //Background color of statusBar
        translucent={false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      />
      <Header />
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: 0,
    backgroundColor: "#2D2D2D",
  },
});
