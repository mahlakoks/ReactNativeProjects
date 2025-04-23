import React, { useRef, useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import MyTodoStyles from "./MyTodo.style";
import MyToDo from "../../../components/MyToDo/MyToDo";
import ToDo from "../../../components/Todo/Todo";
import { EmptyList } from "../../../components/EmptyList/EmptyList";

import useMyToDo from "../../hooks/useMytodos";

export default function MyTodo() {
  const {
    todoList,
    handleToDo,
    doneItems,
    onDelete,
    handleCheckBox,
    handleunCheckBox,
    todoStatus,
    sortHandler,
    completed,
    sortOrder,
    handleDeleteCheckBox,
    isdisplayAll,
    setScrollViewRef,
    setListToDisplay,
  } = useMyToDo();

  return (
    <View>
      <MyToDo
        todoStatus={todoStatus}
        todoList={todoList}
        handleToDo={handleToDo}
        sortHandler={sortHandler}
        setListToDisplay={setListToDisplay}
        setScrollViewRef={setScrollViewRef}
      />
      <View>
        <FlatList
          ref={setScrollViewRef}
          data={
            isdisplayAll
              ? todoList
              : todoList.filter((item) => {
                  return item.completed == true;
                })
          }
          renderItem={({ item }) => {
            return (
              <ToDo
                item={item}
                handleCheckBox={handleCheckBox}
                handleunCheckBox={handleunCheckBox}
                onDelete={onDelete}
                doneItems={doneItems}
              />
            );
          }}
          ListEmptyComponent={<EmptyList isdisplayAll={isdisplayAll} />}
          ListHeaderComponent={<Text>Todo List</Text>}
          ListFooterComponent={
            (isdisplayAll ? todoList : completed).length > 5 ? (
              <Text>LoadMore...</Text>
            ) : null
          }
        />
      </View>
    </View>
  );
}
