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
import WithEnhancements from "../HOC/withEnhancements";

// todoStatus,
//   todoList,
//   handleToDo,
//   sortHandler,
//   setListToDisplay,
//   setScrollViewRef,

function MyToDo({
  onCompleteClick,
  handleSubmit,
  handleSetToDo,
  ...props
}) {

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
          onChangeText={handleSetToDo}
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

export default WithEnhancements(MyToDo);
