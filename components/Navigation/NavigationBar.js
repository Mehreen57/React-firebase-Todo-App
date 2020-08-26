import * as React from "react";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createSwitchNavigator,
  createAppContainer,
  NavigationContainer,
  DefaultTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import TodoApp from "../TodoComponents/TodoApp";
import Completed from "../TodoComponents/Completed";
import Incompleted from "../TodoComponents/Incompleted";

// for creating the botton navigation
const Tab = createBottomTabNavigator();

// For changing the theme
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#2D2D2D",
  },
};

export default function NavigationBar() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "All") {
              iconName = focused ? "folder-open" : "folder-open-outline";
            } else if (route.name === "Completed") {
              iconName = focused
                ? "clipboard-check"
                : "clipboard-check-outline";
            } else if (route.name === "Incompleted") {
              iconName = focused ? "clipboard-text" : "clipboard-text-outline";
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "#C6A569",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="All" component={TodoApp} />
        <Tab.Screen name="Completed" component={Completed} />
        <Tab.Screen name="Incompleted" component={Incompleted} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
