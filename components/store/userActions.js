export const todoAction = () => {
  return {
    type: "ADD_TODO",
    payload: "Do home work"
  }
}

export const completeTodo  = () => {
  return {
    type: "CHECK_TODO",
    payload: true
  }
}

export const undoTodo  = () => {
  return {
    type: "CHECK_TODO",
    payload: false
  }
}