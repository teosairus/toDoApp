import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/header";
import ToDoItem from "./components/todoItem";
import AddToDo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy milk", key: "1" },
    { text: "do laundry", key: "2" },
    { text: "read a book", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: (prevTodos.length + 1).toString() },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 characters long.", [
        {
          text: "Understood",
          onPress: () => {
            console.log("alert closed");
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ToDoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
