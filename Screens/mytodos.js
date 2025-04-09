import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import AddToDo from "../components/AddToDo";
//import Header from "../components/header";
import ToDoIteam from "../components/todoIteam";
import globalStyles from "../shared/globalstyles";
// You can import supported modules from npm
import { Card } from "react-native-paper";

export default function MyToDos({ navigation }) {
  const mydotoList = [
    { text: "Play soccer", key: "44" },
    { text: "Learn reacti", key: "20" },
    { text: "Learn JS", key: "33" },
    { text: "Learn git", key: "4" },
    { text: "Learn PR Process", key: "5" },
    { text: "Learn PR Process new hello", key: "9" },
    { text: "aLearn PR Process new hello", key: "12" },
  ];

  const [myTodo, setTodos] = useState(mydotoList);
  const [countDone, setCountDone] = useState(0);
 // const [doneItems, setDoneItems] = useState([{ text: "Play soccer", key: "44" }]);
  const [doneItems, setDoneItems] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  const handleDoneItems = () => {
    return doneItems;
  };

  const pressHandler = (key) => {
    // setTodos((prevTodos) => {
    //   console.log("Attempt Upate done items key "+prevTodos);

    //  // const updatedTodos = prevTodos.filter((todo) => todo.key !== key);
    //   const completedTodo = prevTodos.find((todo) => todo.key === key);

    //   if (completedTodo) {
    //     setDoneItems((prevDoneItems) => [...prevDoneItems, completedTodo]);
    //   }

    //   return updatedTodos;
    // });

    setDoneItems((prevDoneItems) => {
      // const updatedTodos = prevTodos.filter((todo) => todo.key !== key);
      console.log("Attempt Upate done items key ",prevDoneItems);

      const completedTodo = myTodo?.find((todo) => todo.key === key);
      console.log("Attempt Upate done items key " + key);

      if (completedTodo) {
        console.log("Upate done items");
        //setDoneItems((prevDoneItems) => [...prevDoneItems, completedTodo]);
        return [...prevDoneItems, completedTodo]; //completedTodo;
      }

      return prevDoneItems;
    });

    setCountDone(() => {
      return doneItems.length + 1;
    });
  };

  const handleDelete = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key !== key);
    });
  };

  const submitHandler = (text) => {
    console.log("submitHandler >>> " + text);

    if (text.length <= 3) {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
      return;
    }

    setTodos((prevTodos) => {
      return [{ text, key: (Math.random() * 1000).toString() }, ...prevTodos];
    });
  };

  const changeHandler = (item) => {
    if (item.id !== id) {
      setMyTodo();
    }
  };
  const sortHandler = () => {
    if (myTodo.length > 0) {
      setTodos((prevTodos) => {
        if (sortOrder !== "desc") {
          setSortOrder("desc");
          return [...prevTodos].sort((a, b) => b.text.localeCompare(a.text));
        }

        setSortOrder("asc");
        return [...prevTodos].sort((a, b) => a.text.localeCompare(b.text));
      });
    }
  };

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={() => Keyboard.dismiss}
    >
      <View style={{ flex: 1 }}>
        <AddToDo
          submitHandler={submitHandler}
          sortHandler={sortHandler}
          navigation={navigation}
          doneItems={doneItems}
        />
        <View style={{ flex: 1 }}>
          <Text style={globalStyles.container}>
            Total todos:= {myTodo.length} Completed=: {countDone}
          </Text>
          <FlatList
            data={myTodo}
            renderItem={({ item }) => (
              <ToDoIteam
                item={item}
                handleDelete={handleDelete}
                pressHandler={pressHandler}
                navigation={navigation}
                handleDoneItems={handleDoneItems}
              />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
