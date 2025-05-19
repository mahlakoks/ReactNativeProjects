import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../feature/todoSplice";

export const AddToDo = ({ handleSubmit }) => {

  const testSplice  = useSelector((state)=>state.todo.testSplice);

  const dispatch = useDispatch();
  
  const [toitem, setTodoitem] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);

  const Sumbithandler = () => {
    if (!isEnabled) {
      dispatch(addTodo(toitem));
      setTodoitem("");
      setIsEnabled(true);
    }
  };

  useEffect(() => {
    // console.log('Test button enabled', isEnabled)
    //     console.log('Test button enabled',toitem.length )

    if (toitem.length > 3) {
      setIsEnabled(false);
    }
  }, [toitem]);

  return (
    <View style={styles.addtodocontainer}>
      <Text style={styles.title}> Add todo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Add next todo..."
        value={toitem}
        onChangeText={setTodoitem}
      />
      {/* {!toitem ? <Text style={styles.error}> Todo can't be empty</Text> : null} */}
      <Button
        title="Submit"
        onPress={Sumbithandler}
        disable={isEnabled}
        color={isEnabled ? "lightgray" : "blue"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addtodocontainer: {
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderColor: "blue",
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    height: 40,
    marginBottom: 5,
    borderColor: "blue",
    padding: 10,
  },
  error: {
    color: "red",
  },
});
