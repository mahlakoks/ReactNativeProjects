import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Modal, Button } from "react-native";

export default function AddToDo({ submitHandler, sortHandler, navigation,handleDoneItems }) {
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const changeHandler = (val) => {
    setText(val);
  };

  const onClickHanler = () => {
   // navigation.navigate("DoneItems");
    const doneItemsData = handleDoneItems();
    
    // Navigate to DoneItems screen with the data
    navigation.navigate("DoneItems", { data: doneItemsData });
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
          onPress={onClickHanler}
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
