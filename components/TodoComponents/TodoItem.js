import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  CheckBox,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import moment from "moment";

export default function TodoItem({ item, deleteItem, markCompleted }) {

  // let time = moment().calendar();
  return (
    <View style={styles.todo_list_container}>
      {/* to complete the list */}
      <View style={styles.todo_list_inner}>
        <CheckBox
          disabled={false}
          value={item.isCompleted}
          onValueChange={() => markCompleted(item)}
        />

        {/* todo item */}
        <Text
          style={[item.isCompleted ? styles.todoItemAdd : styles.todoItemStyle]}
        >
          {item.text}
        </Text>

        {/* delete the todo item you here touchableOpacity or other like that dont call functions on icon on native build it will not work*/}
        <FontAwesome
          name="trash-o"
          style={styles.trash}
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  todo_list_container: {
    backgroundColor: "#373737",
    paddingVertical: 25,
    paddingLeft: 15,
    marginBottom: 25,
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: "#312F2F",
    borderRadius: 8,
  },

  todo_list_inner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  todoItemStyle: {
    fontSize: 16,
    paddingLeft: 8,
    color: "#fff",
  },

  todoItemAdd: {
    textDecorationLine: "line-through",
    color: "#C6A569",
  },

  checkBox: {
    borderWidth: 2,
  },

  trash: {
    fontSize: 25,
    color: "#C6A569",
    position: "absolute",
    right: 25,
  },
});
