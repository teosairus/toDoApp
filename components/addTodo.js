import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

const AddToDo = (props) => {
  const { submitHandler } = props;
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => {
          submitHandler(text);
        }}
        title="Add todo"
        color="coral"
      />
    </View>
  );
};
export default AddToDo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
