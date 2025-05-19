import {
  LOAD_EXISTING_TODOS,
  COMPLETE_TODO_ITEM,
  DELETETODO_ITEM,
  ADDTODO_ITEM,
  UPDATETODO_ITEMS,
  RESET_DONE_ITEM,
} from "./maintodotypes";

const initialState = {
  todoList: [],
  todoStatus: {
    totalTodo: 0,
    completed: 0,
  },
};

export const mainTodoReducer = (state = initialState, action) => {
  let list;
  switch (action.type) {
    case LOAD_EXISTING_TODOS:
      list = JSON.parse(action.payload);
      console.log("Action type list ", list.length);
      console.log("Object", action.payload);
      console.log(
        "Length",
        list.filter((todo) => todo.completed === true).length
      );
      return {
        ...state,
        todoList: list,
        todoStatus: {
          totalTodo: list.length,
          completed:
            list && list.filter((todo) => todo.completed === true).length,
        },
      };
    case ADDTODO_ITEM:
      console.log("Attempt to add", action.payload);
      list = [action.payload, ...state.todoList];
      return {
        ...state,
        todoList: list,
        todoStatus: {
          totalTodo: list.length,
          completed:
            list && list.filter((todo) => todo.completed === true).length,
        },
      };
    case UPDATETODO_ITEMS:
      console.log("UPDATETODO_ITEMS", action.payload);

      list = action.payload;
      console.log("Action type list ", list.length);
      console.log("Object", action.payload);
      console.log(
        "Length",
        list.filter((todo) => todo.completed === true).length
      );
      return {
        ...state,
        todoList: list,
        todoStatus: {
          totalTodo: list.length,
          completed:
            list && list.filter((todo) => todo.completed === true).length,
        },
      };
    case RESET_DONE_ITEM:
      console.log("Attempt undo");
      list = [...state.todoList];
      const undoTodo = list.findIndex((item) => {
        return item.key===action.payload;
      });
      undoTodo.completed = false;
      return {
        ...state,
        todoList: list,
        todoStatus: {
          totalTodo: list.length,
          completed:
            list && list.filter((todo) => todo.completed === true).length,
        },
      };
    case DELETETODO_ITEM:
      list = state.todoList; //JSON.parse(action.payload);
      list.filter((item) => item.key !== action.payload);
         return {
        ...state,
        todoList: list,
        todoStatus: {
          totalTodo: list.length,
          completed:
            list && list.filter((todo) => todo.completed === true).length,
        },
      };
    default:
      return state;
  }
};
