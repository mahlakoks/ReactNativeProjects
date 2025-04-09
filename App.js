import React, { useState } from "react";
// import Navigator from "./routes/mytodoStack";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { View, Text, FlatList, ImageBackground, Modal } from "react-native";
import s from "./App.style";
import MyToDo from "./components/MyToDo/MyToDo";
import ToDo from "./components/Todo/Todo";
import uuid from "react-native-uuid";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const mydotoList = [
    { text: "Play soccer", key: "4033" },
    { text: "Learn reacti", key: "20" },
    { text: "Learn JS", key: "33" },
    { text: "Learn git", key: "4" },
    { text: "Learn PR Process", key: "5" },
    { text: "Learn PR Process new hello", key: "9" },
    { text: "aLearn PR Process new hello", key: "12" },
    { text: "Play soccer", key: "440" },
    { text: "Learn reacti", key: "200" },
    { text: "Learn JS", key: "330" },
    { text: "Learn git", key: "40" },
    { text: "Learn PR Process", key: "50" },
    { text: "Learn PR Process new hello", key: "90" },
    { text: "aLearn PR Process new hello", key: "120" },
    { text: "Play soccer", key: "443" },
    { text: "Learn reacti", key: "203" },
    { text: "Learn JS", key: "333" },
    { text: "Learn git", key: "43" },
    { text: "Learn PR Process", key: "53" },
    { text: "Learn PR Process new hello", key: "93" },
    { text: "aLearn PR Process new hello", key: "123" },
  ];

  const [todoList, setTodoList] = useState(mydotoList);
  const [todoStatus, setTodoStatus] = useState({
    totalTodo: todoList.length,
    completed: 0,
  });

  const [completed, setCompleted] = useState([]);
  const [sortOrder, setsortOrder] = useState("desc");
  const [modalOpen, setModalOpen] = useState(false);
  const [isdisplayAll, setIsDisplayAll] = useState(true);

  const setListToDisplay = () => {
    setIsDisplayAll(!isdisplayAll);
  };

  const handleToDo = (value) => {
    const newTodo = { text: value, key: uuid.v4() };
    setTodoList((prevDodos) => {
      return [newTodo, ...prevDodos];
    });
  };

  const doneItems = (item) => {
    setCompleted((completed) => {
      return [...completed, item];
    });
  };

  const onDelete = (key) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((item) => item.key !== key);
    });
    setCompleted((prevTodo) => {
      return prevTodo.filter((item) => item.key !== key);
    });
    handleDeleteCheckBox(key);
  };

  const handleCheckBox = (key) => {
    const newCompletedCount = todoList.reduce((count, item) => {
      if (item.key === key) {
        return count + 1;
      }
      return count;
    }, todoStatus.completed);

    setTodoStatus((prevStatus) => ({
      ...prevStatus,
      completed: newCompletedCount,
    }));
  };

  const handleDeleteCheckBox = (key) => {
    const newCompletedCount = todoList.reduce((count, item) => {
      if (item.key === key) {
        return count === 0 ? 0 : count - 1;
      }
      return count;
    }, todoStatus.completed);

    setTodoStatus((prevStatus) => ({
      ...prevStatus,
      completed: newCompletedCount,
    }));
  };

  const sortHandler = () => {
    if (todoList.length > 0) {
      setTodoList((prevTodos) => {
        if (sortOrder !== "desc") {
          setsortOrder("desc");
          return [...prevTodos].sort((a, b) => b.text.localeCompare(a.text));
        }

        setsortOrder("asc");
        return [...prevTodos].sort((a, b) => a.text.localeCompare(b.text));
      });
    }

    if (todoList.length > 0) {
      setCompleted((prevTodos) => {
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
    //<Navigator />

    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <MyToDo
          todoStatus={todoStatus}
          todoList={todoList}
          handleToDo={handleToDo}
          sortHandler={sortHandler}
          setListToDisplay={setListToDisplay}
        />
        <View style={s.todoList}>
          <FlatList
            data={isdisplayAll ? todoList : completed}
            renderItem={({ item }) => {
              return (
                <ToDo
                  item={item}
                  handleCheckBox={handleCheckBox}
                  onDelete={onDelete}
                  doneItems={doneItems}
                />
              );
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
