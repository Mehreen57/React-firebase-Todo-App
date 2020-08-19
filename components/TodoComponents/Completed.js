import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";
import { db } from '../../server/firebase';

export default function Completed({ navigation }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setFirebaseRead();

    //force re-render
    const unsubscribe = navigation.addListener('focus', () => {
      setFirebaseRead();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation])

  const setFirebaseRead = () => {
    db.collection('todos')
    .where("isCompleted", "==", true)
    .get()
    .then(res => {
      const tempTodo = [];

      res.forEach(doc => {
        tempTodo.push({ ...doc.data(), id: doc.id })
      });

      setTodos(tempTodo)
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
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
  main_container: {
    width: "100%",
    backgroundColor: "#2D2D2D",
  },
});
