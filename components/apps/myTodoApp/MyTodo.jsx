import React, { useRef, useState, useEffect,useMemo } from "react";
import { View, Text, FlatList } from "react-native";
import MyTodoStyles from "./MyTodo.style";
import MyToDo from "../../../components/MyToDo/MyToDo";
import ToDo from "../../../components/Todo/Todo";
import { EmptyList } from "../../../components/EmptyList/EmptyList";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { load_existing_todoItems,add_todo_item,update_todo_items,reset_done_item, complete_todo_item } from "../../../redux";
import { useDispatch, useSelector } from "react-redux";
import useTodos from "../../Hooks/useTodos"
import { memo } from 'react';

function MyTodo() {
  const dispatch = useDispatch();
  const reduxTodoTest = useSelector((state) => state);
  console.log('>>>>>>>>>reduxTodoTest\n',JSON.stringify(reduxTodoTest,null,2));
  const reduxTodo = useSelector((state) => state.todoList);
  const totatTodoItems = useSelector((state) => state.todoStatus.totalTodo);
  const totalDoneItems = useSelector((state) => state.todoStatus.completed);

  const { } = useTodos;

  console.log(
    // "Initila ToDO List",
    // reduxTodo,
    "\n\n\nTotal todo:=",
    totatTodoItems,
    "\ncompleted:=",
    totalDoneItems,'\n\n'
  );

  // const totalTodos = useSelector((state) =>
  //   console.log(state.todoStatus.totalTodo)
  // );
  // const completedTodos = useSelector((state) =>
  //   console.log(state.todoStatus.completed)
  // );


  const [todoList, setTodoList] = useState({});
  const [todoStatus, setTodoStatus] = useState({
    totalTodo: todoList.length,
    completed: 0,
  });

  const [completed, setCompleted] = useState([]);
  const [sortOrder, setsortOrder] = useState("desc");
  const [isdisplayAll, setIsDisplayAll] = useState(true);

  async function loadTodoList() {
    try {
      const value = await AsyncStorage.getItem("@todoList");
      const parsedTodo = JSON.parse(value);
      setTodoList(parsedTodo || []);
      dispatch()
      if (value !== null) {
      }
    } catch (e) {}
  }

  async function saveTodoList() {
    try {
      const jsonValue = JSON.stringify(todoList);
      await AsyncStorage.setItem("@todoList", jsonValue);
    } catch (e) {}
  }

  useEffect(() => {
    const loadTodoList = async () => {
      try {
        const value = await AsyncStorage.getItem("@todoList");
        const parsedTodo = JSON.parse(value);
        setTodoList(parsedTodo || []);
        dispatch(load_existing_todoItems(value));
      } catch (e) {
        console.error("Error loading todo list:", e);
      }
    };

    loadTodoList();
  }, []);

  useEffect(() => {
    const saveTodoList = async () => {
      try {
        const jsonValue = JSON.stringify(todoList);
        await AsyncStorage.setItem("@todoList", jsonValue);
      } catch (e) {
        console.error("Error saving todo list:", e);
      }
    };

    saveTodoList();
  }, [todoList,reduxTodo]);

  useEffect(() => {
    const getCompleted = () => {
      if (Array.isArray(todoList)) {
        return todoList.filter((item) => item.completed).length;
      }
      return 0;
    };
    const newCompletedCount = getCompleted();
    setTodoStatus({
      totalTodo: todoList.length,
      completed: newCompletedCount,
    });
  }, [todoList]);

  const setScrollViewRef = useRef();

  const setListToDisplay = () => {
    setIsDisplayAll(!isdisplayAll);
  };

  const handleToDo = (value) => {
    const newTodo = { text: value, key: uuid.v4(), completed: false };
          dispatch(add_todo_item(newTodo))

    // setTodoList((prevDodos) => {
    //   dispatch(add_todo_item(newTodo))
    // //  return [newTodo, ...prevDodos];
    // });
  };

  const doneItems = (item) => {
    const newToDo = todoList.filter((item) => {
      return item.completed == true;
    });
    setCompleted(newToDo);
    dispatch(update_todo_items(newToDo))
  };

  const onDelete = (key) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((item) => item.key !== key);
    });
    setCompleted((prevTodo) => {
      return prevTodo.filter((item) => item.key !== key);
    });
    dispatch(delete_todo_item(key))

    handleDeleteCheckBox(key);

  };

  const handleCheckBox = (key) => {
    const newToDo = [...todoList];
    const completedTodo = newToDo.findIndex((item) => {
      return item.key === key;
    });

    if (completedTodo == -1) {
      throw new Error("Ouch to do item not  in the list");
    }

    newToDo[completedTodo].completed = true;

    setTodoList(newToDo);
   // dispatch(add_todo_item(newToDo))
    dispatch(update_todo_items(newToDo))

  };

  const handleunCheckBox = (key) => {
    const newundoToDo = [...todoList];
    const undoTodo = newundoToDo.findIndex((item) => {
      return item.key === key;
    });

    newundoToDo[undoTodo].completed = false;
    dispatch(reset_done_item(key))
    setTodoList(newundoToDo);
  };

  const handleDeleteCheckBox = (key) => {
    const deleteTodo = todoList.filter((item) => {
      return item.key != key;
    });
    setTodoList(deleteTodo);
    dispatch(update_todo_items(deleteTodo))

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
    <View>
      <MyToDo
        todoStatus={todoStatus}
        // todoList={todoList}
        todoList={reduxTodo}
        handleToDo={handleToDo}
        sortHandler={sortHandler}
        setListToDisplay={setListToDisplay}
        setScrollViewRef={setScrollViewRef}
      />
      {/* {<View/*  style={MyTodoStyles.todoList}> */}
      <View>
        <FlatList
          ref={setScrollViewRef}
          data={
            isdisplayAll
              ? reduxTodo
              : reduxTodo.filter((item) => {
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


export default memo(MyTodo);