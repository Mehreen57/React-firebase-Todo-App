import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import TodoItem from "./TodoItem";
import { db } from "../../server/firebase";

export default function Inompleted({ navigation }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setFirebaseRead();

    //force re-render
    const unsubscribe = navigation.addListener("focus", () => {
      setFirebaseRead();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, []);

  const setFirebaseRead = () => {
    db.collection("todos")
      .where("isCompleted", "==", false)
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

  return (
    <View style={styles.main_container}>
      <View>
        <Text style={styles.incomplete_title}>Incomplete Tasks</Text>
      </View>

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          // you should use here some other component
          <TodoItem
            item={item}
            deleteItem={() => false}
            markCompleted={() => false}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  incomplete_title: {
    color: "#C6A569",
    textAlign: "center",
    paddingBottom: 15,
    fontSize: 16,
  },
});
