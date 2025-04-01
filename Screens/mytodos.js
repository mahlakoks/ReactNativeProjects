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
import Header from "../components/header";
import ToDoIteam from "../components/todoIteam";

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
  // const [countTodo, setCountTodo] = useState(mydotoList.length);

  const [countDone, setCountDone] = useState(0);
  const [doneIteams, setdoneIteams] = useState([]);

  const [sortOrder, setsortOrder] = useState("desc");

  const handleDoneItems = () => {
    return doneIteams;
  };

  const pressHandler = (key) => {
    // setdoneIteams((currDone) => {

    // })
    setTodos((prevTodos) => {
      console.log(prevTodos);
      doneIteams.push(prevTodos); //avoid direct manupulation
      return prevTodos.filter((todo) => todo.key != key);
    });

    setCountDone(() => {
      return doneIteams.length;
    });
    console.log("countDone   " + countDone);
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

  const completeHandler = () => {};

  const changeHandler = (item) => {
    if (item.id !== id) {
      setMyTodo();
    }
  };
  const sortHandler = () => {
    if (myTodo.length > 0) {
      setTodos((prevTodos) => {
        console.log("  sortOrder" + sortOrder);

        if (sortOrder !== "desc") {
          setsortOrder("desc");
          return [...prevTodos].sort((a, b) => b.text.localeCompare(a.text));
        }

        setsortOrder("asc");
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
        <Header />
        <AddToDo
          submitHandler={submitHandler}
          sortHandler={sortHandler}
          navigation={navigation}
          handleDoneItems={handleDoneItems}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.container}>
            Total todos:= {myTodo.length} Completed=: {countDone}
          </Text>
          <FlatList
            data={myTodo}
            renderItem={({ item }) => (
              <ToDoIteam
                item={item}
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

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 10,
    backgroundColor: "lightgrey",
  },
  listContainer: {
    flex: 1,
  },
});
