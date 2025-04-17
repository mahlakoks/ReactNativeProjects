//import React, { useRef, useState,useEffect } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground} from "react-native";
import s from "./App.style";
//import MyToDo from "./components/MyToDo/MyToDoHOC";
//import MyToDo from "./components/MyToDo/MyToDo";
//import ToDo from "./components/Todo/Todo";
//import { EmptyList } from "./components/EmptyList/EmptyList";

//import uuid from "react-native-uuid";
import { MaterialIcons } from "@expo/vector-icons";
import backroundImage from "./assets/todo5.png";
//import AsyncStorage from '@react-native-async-storage/async-storage';
import MyTodo from "./components/apps/myTodoApp/MyTodo";

export default function App() {
//   const mydotoList = [
//     { text: "Play soccer", key: "4033", completed: true },
//     { text: "Learn reacti", key: "20", completed: true },
//     { text: "Learn JS", key: "33", completed: true },
//     { text: "Learn git", key: "4", completed: false },
//     { text: "Learn PR Process", key: "5", completed: false },
//     { text: "Learn PR Process new hello", key: "9", completed: false },
//     { text: "aLearn PR Process new hello", key: "12", completed: false },
//     { text: "Play soccer", key: "440", completed: false },
//     { text: "Learn reacti", key: "200", completed: false },
//     { text: "Learn JS", key: "330", completed: false },
//     { text: "Learn git", key: "40", completed: false },
//     { text: "Learn PR Process", key: "50", completed: false },
//     { text: "Learn PR Process new hello", key: "90", completed: false },
//     { text: "aLearn PR Process new hello", key: "120", completed: false },
//     { text: "Play soccer", key: "443", completed: false },
//     { text: "Learn reacti", key: "203", completed: false },
//     { text: "Learn JS", key: "333", completed: false },
//     { text: "Learn git", key: "43", completed: false },
//     { text: "Learn PR Process", key: "53", completed: false },
//     { text: "Learn PR Process new hello", key: "93", completed: true },
//     { text: "aLearn PR Process new hello", key: "123", completed: true },
//   ];



//   async function loadTodoList() {
//     try {
//       const value = await AsyncStorage.getItem('@todoList');
//       const parsedTodo = JSON.parse(value)
//       setTodoList(parsedTodo || []);
//       if (value !== null) {
//         // value previously stored
//       }
//     } catch (e) {
//       // error reading value
//     }
//   }
  
//   async function saveTodoList(){
//     try {
//       const jsonValue = JSON.stringify(todoList);
//       await AsyncStorage.setItem('@todoList', jsonValue);
//     } catch (e) {
//       // saving error
//     }
//   }




//   //const [todoList, setTodoList] = useState(mydotoList);
//   const [todoList, setTodoList] = useState({});
//   const [todoStatus, setTodoStatus] = useState({
//     totalTodo: todoList.length,
//     completed: 0,
//   });

//   const [completed, setCompleted] = useState([]);
//   const [sortOrder, setsortOrder] = useState("desc");
//   const [isdisplayAll, setIsDisplayAll] = useState(true);

//   useEffect(() => {
//     console.log("GET TODO LIST")

//     const loadTodoList = async () => {
//         try {
//             const value = await AsyncStorage.getItem('@todoList');
//             const parsedTodo = JSON.parse(value);
//             setTodoList(parsedTodo || []);
//         } catch (e) {
//             // Error reading value
//             console.error("Error loading todo list:", e);
//         }
//     };

//     loadTodoList(); // Call the async function
//   }, []);
  
//   useEffect(() => {
//     console.log("SAVE TODO LIST")
//     const saveTodoList = async () => {
//         try {
//             const jsonValue = JSON.stringify(todoList);
//             await AsyncStorage.setItem('@todoList', jsonValue);
//         } catch (e) {
//             // Saving error
//             console.error("Error saving todo list:", e);
//         }
//     };

//     saveTodoList(); // Call the async function
// }, [todoList]);

//   useEffect(() => {

//     const getCompleted = () => {
//       if (Array.isArray(todoList)) {
//         return todoList.filter(item => item.completed).length;
//     }
//     return 0;
//     };
//     const newCompletedCount = getCompleted();
//     setTodoStatus({
//       totalTodo: todoList.length,
//       completed: newCompletedCount,
//     });
//   }, [todoList]);
  


//   const setScrollViewRef = useRef();

//   const setListToDisplay = () => {
//     setIsDisplayAll(!isdisplayAll);
//   };

//   const handleToDo = (value) => {
//     const newTodo = { text: value, key: uuid.v4(), completed: false };
//     setTodoList((prevDodos) => {
//       return [newTodo, ...prevDodos];
//     });
//   };

//   const doneItems = (item) => {
//     const newToDo=todoList.filter((item)=>{return item.completed==true})
//     setCompleted(newToDo);
//   };

//   const onDelete = (key) => {
//     setTodoList((prevTodo) => {
//       return prevTodo.filter((item) => item.key !== key);
//     });
//     setCompleted((prevTodo) => {
//       return prevTodo.filter((item) => item.key !== key);
//     });
//     handleDeleteCheckBox(key);
//   };

//   const handleCheckBox = (key) => {
//     const newToDo = [...todoList];
//     const completedTodo = newToDo.findIndex((item) => {
//       return item.key === key;
//     });

//     if (completedTodo==-1) {
//       throw new Error("Ouch to do item not  in the list");
//     }

//     newToDo[completedTodo].completed = true;

//     setTodoList(newToDo);
//   };

//   const handleunCheckBox = (key) => {
//     const newundoToDo = [...todoList];
//     const undoTodo = newundoToDo.findIndex((item) => {
//       return item.key === key;
//     });

//     newundoToDo[undoTodo].completed = false;

//     setTodoList(newundoToDo);
//   };


//   const handleDeleteCheckBox = (key) => {
//     const deleteTodo = todoList.filter((item) => {
//       return item.key != key;
//     });
//     setTodoList(deleteTodo);

//     const newCompletedCount = todoList.reduce((count, item) => {
//       if (item.key === key) {
//         return count === 0 ? 0 : count - 1;
//       }
//       return count;
//     }, todoStatus.completed);

//     setTodoStatus((prevStatus) => ({
//       ...prevStatus,
//       completed: newCompletedCount,
//     }));
//   };

//   const sortHandler = () => {
//     if (todoList.length > 0) {
//       setTodoList((prevTodos) => {
//         if (sortOrder !== "desc") {
//           setsortOrder("desc");
//           return [...prevTodos].sort((a, b) => b.text.localeCompare(a.text));
//         }
//         setsortOrder("asc");
//         return [...prevTodos].sort((a, b) => a.text.localeCompare(b.text));
//       });
//     }

//     if (todoList.length > 0) {
//       setCompleted((prevTodos) => {
//         if (sortOrder !== "desc") {
//           setsortOrder("desc");
//           return [...prevTodos].sort((a, b) => b.text.localeCompare(a.text));
//         }

//         setsortOrder("asc");
//         return [...prevTodos].sort((a, b) => a.text.localeCompare(b.text));
//       });
//     }
//   };



  return (
    <ImageBackground
      source={backroundImage}
      style={{ height: "100%" }}
      imageStyle={{ opacity: 0.1 }}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {/* <MyToDo
            todoStatus={todoStatus}
            todoList={todoList}
            handleToDo={handleToDo}
            sortHandler={sortHandler}
            setListToDisplay={setListToDisplay}
            setScrollViewRef={setScrollViewRef}
          />
          <View style={s.todoList}>
            <FlatList
              ref={setScrollViewRef}
              data={isdisplayAll ? todoList : todoList.filter((item) => {return item.completed==true }) }
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
          </View> */}
        <MyTodo />

        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
