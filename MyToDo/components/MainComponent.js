// MainComponent.js
import React, {useState,useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, checkUncheckTodo } from "../feature/todoSplice";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { ToDos } from "./ToDos";
import { TodoListContext } from "../context/todoContex";


const MainComponent = () => {

  const { isdisplayAll, setIsDisplayAll} =useContext(TodoListContext)
  const testSplice = useSelector((state) => state.todo.testSplice);
  const dispatch = useDispatch();


  const handleCheckBox = (id, isChecked) => {
    const payload = { id, isChecked };
    dispatch(checkUncheckTodo(payload));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <FlatList
      keyExtractor={(item, index) => `${item.id}-${index}`}
      data={
            isdisplayAll
              ? testSplice
              : testSplice.filter((item) => {
                  return item.completed == true;
                })
          }
      renderItem={({ item }) => {
        return (
          <ToDos
            item={item.id}
            todoItem={item.title}
            todoStatus={item.completed}
            handleDelete={handleDelete}
            handleCheckBox={handleCheckBox}
          />
        );
      }}
      ItemSeparatorComponent={() => {
        return <View style={{ height: 16 }}></View>;
      }}
      ListEmptyComponent={() => {
        return (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}> Empty todos</Text>
          </View>
        );
      }}
      // ListFooterComponent={() => {
      //   return (
      //     <View style={{ height: 16, paddingTop: 10, marginBottom: 60 }}>
      //       <Text> End of the TODOS</Text>
      //     </View>
      //   );
      // }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemStatus: {
    fontSize: 14,
    color: "grey",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MainComponent;
