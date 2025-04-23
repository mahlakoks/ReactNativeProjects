const initialState = {
  isChecked: false,
  todoList: [],
  todoStatus: {
    totalTodo: 0,
    completed: 0,
  },
};

export default (state, { type, payload }) => {
  switch (type) {
    case "CHECK_TODO":
      console.log(" TESSSSSSSSSSSSSS");
      return { ...state, isChecked: payload };
  }
  console.log(" TESSSSSSSSSSSSSS");

  return state;
};
