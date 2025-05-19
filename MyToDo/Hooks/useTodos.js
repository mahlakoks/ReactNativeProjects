import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useTodos = (todoStatus = false) => {
  // const testing = useSelector((state) => {
  //   state
  // })

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
  console.log("Delete attempt original ", todoData);
    
    // Filter out the item with the specified id
    const updatedTodos = todoData.filter((item) => item.id !== id);
    
    console.log("Delete attempt updated", updatedTodos);

    // Update the state with the new array
    setTestData(updatedTodos);
  };

  const [ischecked, setIschecked] = useState(todoStatus); // Initialize state

  return {
    ischecked,
    setIschecked,
    todoData,
    setTestData,
    handleCheckBox,
    handleSubmit,
    handleDelete,
  }; // Return the state and setter
};
