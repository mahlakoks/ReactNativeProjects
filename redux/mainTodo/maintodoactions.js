import {
  LOAD_EXISTING_TODOS,
  COMPLETE_TODO_ITEM,
  DELETETODO_ITEM,
  ADDTODO_ITEM,
  UPDATETODO_ITEMS,
  RESET_DONE_ITEM
} from "./maintodotypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const add_todo_item = (todoItem) => {
  return {
    type: ADDTODO_ITEM,
    payload: todoItem,
  };
};

export const update_todo_items = (todoItems) => {
  return {
    type: UPDATETODO_ITEMS,
    payload:todoItems
  }
}

export const reset_done_item = (iteamKey) => {
  return {
    type: RESET_DONE_ITEM,
    payload:iteamKey
  }
}

export const load_existing_todoItems = (existingtodos) => {
  return {
    type: LOAD_EXISTING_TODOS,
    payload: existingtodos,
  };
};

export const complete_todo_item = () => {
  return {
    type: COMPLETE_TODO_ITEM,
  };
};

export const delete_todo_item = (key) => {
  return {
    type: DELETETODO_ITEM,
    payload:key,
  };
};

export const get_InitialTodos = (users) => {

  // return async (dispatch) => {
  //  // const loadTodoList = async () => {
  //     try {
  //       console.log("111async ATTEMPT GET TODO LIST");

  //       const value = await AsyncStorage.getItem("@todoList");
  //       const parsedTodo = JSON.parse(value);
  //       /// setTodoList(parsedTodo || []);
  //       dispatch(load_existing_todoItems(parsedTodo || []));
  //     } catch (e) {
  //       console.log("0000ERRRRRRRRasync ATTEMPT GET TODO LIST");

  //       console.error("Error loading todo list:", e);
  //     }
  //   //};
  // };
};
