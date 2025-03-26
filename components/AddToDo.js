import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Button } from "react-native";

export default function AddToDo({ submitHandler, sortHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View style={styles.addToDo}>
      <Text> Add todo::</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter next todo..."
        onChangeText={changeHandler}
        returnKeyType="go"
        onSubmitEditing={() => submitHandler(text)}
      />
      <View style={styles.CTA}>
        <Button
          title="submit"
          color={"lightgreen"}
          onPress={() => submitHandler(text)}
        />
        <Button title="Sort" color={"lightgreen"} onPress={sortHandler} />
        <Button
          title="Completed"
          color={"lightgreen"}
          onPress={() => console.log("complete")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  addToDo: {
    margin: 10,
  },
  CTA: {
    margintop: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    margin: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
});
