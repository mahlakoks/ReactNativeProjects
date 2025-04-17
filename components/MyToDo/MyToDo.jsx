import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import s from "./MyToDo.style";
import ToDoButtons from "../ToDoButtons/ToDoButtons";

export default function MyToDo({
  todoStatus,
  todoList,
  handleToDo,
  sortHandler,
  setListToDisplay,
  setScrollViewRef,
}) {
  const [nextTodo, setNextTodo] = useState("");
  const [sortOrder, setsortOrder] = useState("desc");
  const [displayOption, setDisplayOption] = useState("Completed");

  const handleSubmit = () => {
    if (nextTodo.length <= 3) {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
      return;
    }
    handleToDo(nextTodo);
    setScrollViewRef.current.scrollToEnd();
    setNextTodo("");
  };

  const onCompleteClick = () => {
    setDisplayOption(displayOption === "Completed" ? "All" : "Completed");
    setListToDisplay();
  };

  return (
    <View style={s.mytodo}>
      <ImageBackground
        //  source={require("../../assets/todo3.png")}
        style={{
          overlay: {
            position: "absolute",
            backgroundColor: "0.3",
          },
        }}
      >
        <Text style={s.headerName}> MyToDos</Text>
        <Text style={s.inputText}> Add ToDo</Text>
        <TextInput
          style={s.input}
          placeholder="Enter next todo"
          onChangeText={setNextTodo}
          value={nextTodo}
        />
        <View style={s.calltoaction}>
          <TouchableOpacity onPress={handleSubmit} style={s.button}>
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sortHandler} style={s.button}>
            <Text>Sort</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCompleteClick} style={s.button}>
            <Text>{displayOption}</Text>
          </TouchableOpacity>
        </View>
        <View style={s.tosocounts}>
          <Text>Total todos:=({todoList.length})</Text>
          <Text>Completed:=({todoStatus.completed})</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
