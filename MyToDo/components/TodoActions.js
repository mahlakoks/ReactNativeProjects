import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import { CheckBox } from "@react-native-community/checkbox";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Checkbox from "expo-checkbox";
import { TodoListContext } from "../context/todoContex";
import { useDispatch, useSelector } from "react-redux";
import { sortDesc, sortAsc } from "../feature/todoSplice";
export const ToDoActions = () => {
  const testSplice = useSelector((state) => state.todo.testSplice);
  const dispatch = useDispatch();
  const [totaTodos, setTotalTodos] = useState(0);
  const [comletedTodos, setCompletedTodos] = useState(0);
  const { todoData, isdisplayAll, setIsDisplayAll, sortOrder, setsortOrder } =
    useContext(TodoListContext);
  const todoItems = testSplice;

  useEffect(() => {
    const newtotaTodos = todoItems.length;
    setTotalTodos(newtotaTodos);
    const newcomletedTodos = todoItems.filter((item) => {
      return item.completed === true;
    }).length;
    setCompletedTodos(newcomletedTodos);
  }, [todoItems]);

  const sortAcort = () => {
      if (sortOrder === "desc") {
        setsortOrder("asc");
        dispatch(sortAsc());
        return;
      }
      setsortOrder("desc");
      dispatch(sortDesc());
      return;
  };

  return (
    <View style={styles.todoscontainer}>
      <View style={styles.todostabs}>
        <Pressable
          onPress={() => {
            return setIsDisplayAll(true);
          }}
        >
          <Text style={styles.buttons}>All({totaTodos})</Text>
        </Pressable>
        <Pressable onPress={sortAcort}>
          <Text style={styles.buttons}>Sort</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            return setIsDisplayAll(false);
          }}
        >
          <Text style={styles.buttons}>Completed({comletedTodos})</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoscontainer: {
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  todostabs: {
    flexDirection: "row",
    // borderWidth: 8,
    //borderWidth: 1,
    justifyContent: "space-between",
    padding: 2,
    marginVertical: 2,
  },
  buttons: {
    fontWeight: "bold",
    borderWidth: 8,
    borderWidth: 1,
    padding: 2,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 7,
    borderWidth: 1,
    borderStyle: "dotted",
  },
});
