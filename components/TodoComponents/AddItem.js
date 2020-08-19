import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

export default function AddItem({ submitHandler, changeHandler, value }) {

  return (
    <View style={styles.add_item_fields}>
      <TextInput
        style={styles.text_input}
        placeholder="Enter Todo Item"
        onChangeText={changeHandler} //changeHandler automatically takes value paramter here , and that value=text we enter in input
        //onChangeText={changeHandler} is same as onChangeText={(value) => changeHandler(value)}
        value={value}
      />

      <Entypo
        style={styles.add_icon}
        name="add-to-list"
        onPress={submitHandler}
      />
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  add_item_fields: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 40,
  },

  text_input: {
    height: 40,
    borderWidth: 1,
    width: "78%",
    paddingLeft: 25,
    borderRadius: 40,
    borderColor: "#C6A569",
    color: "#fff",
  },
  add_icon: {
    fontSize: 30,
    margin: 12,
    color: "#C6A569",
  },
});
