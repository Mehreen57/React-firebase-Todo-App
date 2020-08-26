import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";
import { db } from "../../server/firebase";

function TodoApp({ navigation }) {
  // React Hooks declarations
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    setFirebaseRead();
  }, []);

  // delete an item
  const deleteItem = (id) => {
    db.collection("todos")
      .doc(id)
      .delete()
      .then(() => {
        setFirebaseRead();
      })
      .catch((err) => {});
  };

  // setFirebaseRead function
  const setFirebaseRead = () => {
    db.collection("todos")
      .get()
      .then((res) => {
        const tempTodo = [];

        res.forEach((doc) => {
          tempTodo.push({ ...doc.data(), id: doc.id });
        });

        setTodos(tempTodo);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeHandler = (value) => {
    setText(value);
  };

  // add items on click
  const submitHandler = () => {
    if (!text) {
      Alert.alert(" Enter todo");
      return TodoList;
    }

    db.collection("todos")
      .add({ text: text, isCompleted: false })
      .then((res) => {
        setText("");
        setFirebaseRead();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // completed list...
  const completedTask = (item) => {
    console.log(item);
    db.collection("todos")
      .doc(item.id)
      .update({ isCompleted: !item.isCompleted })
      .then(() => {
        setFirebaseRead();
      })
      .catch(() => {
        //do err stuffs
      });
  };

  return (
    <ScrollView keyboardShouldPersistTaps={"handled"}>
      <View style={styles.main_container}>
        <AddItem
          submitHandler={submitHandler}
          changeHandler={changeHandler}
          value={text}
        />
        {/* TodoItem lists, here data is todos array and in renderitem item={item} is prop passing to other component*/}
        <View>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem
                item={item}
                deleteItem={deleteItem}
                markCompleted={completedTask}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
}

// styles
const styles = StyleSheet.create({
  main_container: {
    width: "100%",
  },
});

export default TodoApp;
