
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  Pressable,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { createContext, useEffect, useState, } from "react";
import { AddToDo } from "./components/AddTodo";
import { ToDos } from "./components/ToDos";
import { ToDoActions } from "./components/TodoActions";
import { useTodos } from "./Hooks/useTodos";
import todostore from "./app/todoStore";
import { Provider } from "react-redux";
import { TodoListContext } from "./context/todoContex";
import { useSelector } from "react-redux";
import MainComponent from "./components/MainComponent"

export default function App() {

  const initilaData = [
    {
      userId: 106,
      id: 104,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 108,
      id: 205,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 109,
      id: 306,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et ",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam adipisci qu",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
  ];

  const [isdisplayAll, setIsDisplayAll] = useState(true);
  const [sortOrder, setsortOrder] = useState("desc");
   const setListToDisplay = () => {
    setIsDisplayAll(!isdisplayAll);
  };

  const [todoData, setTestData] = useState(initilaData);

  const handleCheckBox = (id, ischecked) => {
    const itemtest = todoData.filter((item) => {
      return item.id == id;
    });
    let updatedTodos = [...todoData];
    const testing = updatedTodos.find((item) => item.id === id);
    testing.completed = ischecked;
    setTestData(updatedTodos);
  };

  const handleSubmit = (newTodo) => {
    const toadd = {
      userId: Math.floor(Math.random() * (990 + 1)),
      id: Math.floor(Math.random() * (9700 + 1)),
      title: newTodo,
      completed: false,
    };
    const newData = [toadd, ...todoData];
    setTestData(newData);
  };

  const handleDelete = (id) => {
    const updatedTodos = todoData.filter((item) => item.id !== id);
    setTestData(updatedTodos);
  };

  return (
    <Provider store={todostore}>
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => Keyboard.dismiss()}>
          <TodoListContext.Provider value={{ todoData, setTestData,isdisplayAll,setIsDisplayAll,sortOrder, setsortOrder}}>
          <AddToDo handleSubmit={handleSubmit} />
            <ToDoActions/>
              <MainComponent />
        </TodoListContext.Provider>
      </TouchableOpacity>
    </SafeAreaView>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",

    padding: StatusBar.currentHeight,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
