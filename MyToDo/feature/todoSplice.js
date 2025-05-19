import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  testSplice: [
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: true,
    },
  ],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        userId: Math.floor(Math.random() * (990 + 1)),
        id: Math.floor(Math.random() * (9700 + 1)),
        title: action.payload,
        completed: false,
      };
      state.testSplice.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.testSplice = state.testSplice?.filter(
        (item) => item.id !== action.payload
      );
    },
    sortDesc: (state, action) => {
      console.log("Sort on Dessss", state.testSplice);
      state.testSplice = state.testSplice?.sort((a, b) => {
        const textA = a.title;
        const textB = b.title;
        return textB.localeCompare(textA);
      });
    },
    sortAsc: (state, action) => {
      console.log("Sort on Assss", state.testSplice);
      state.testSplice = state.testSplice?.sort((a, b) => {
        const textA = a.title;
        const textB = b.title;
        return textA.localeCompare(textB); 
      });
    },
    checkUncheckTodo: (state, action) => {
      const { id, isChecked } = action.payload;
      const todo = state.testSplice.find((item) => item.id === id);
      if (todo) {
        todo.completed = isChecked;
      }
    },
  },
});

export const { addTodo, deleteTodo, checkUncheckTodo, sortDesc, sortAsc } =
  todoSlice.actions;
export default todoSlice.reducer;
