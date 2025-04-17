import React, { useState } from "react";
import {
  View,
  Alert,
} from "react-native";
import ToDoButtons from "../ToDoButtons/ToDoButtons";

function WithEnhancements(OriginalComponent) {
  const newComponent = (props) => {
    const [nextTodo, setNextTodo] = useState("");
    const [sortOrder, setsortOrder] = useState("desc");
    const [displayOption, setDisplayOption] = useState("Completed");

    const handleSetToDo = (value) => {
      setNextTodo(value)
    }

    const handleSubmit = () => {
      if (nextTodo.length <= 3) {
        Alert.alert("OOPS", "Todo must be over 3 characters long", [
          { text: "Understood", onPress: () => console.log("alert closed") },
        ]);
        return;
      }
      handleToDo(nextTodo);
      setScrollViewRef.current.scrollToEnd();
      setNextTodo("");
    };

    const onCompleteClick = () => {
      setDisplayOption(displayOption === "Completed" ? "All" : "Completed");
      setListToDisplay();
    };

    return (
      <View>
        <OriginalComponent
          handleSubmit={handleSubmit}
          onCompleteClick={onCompleteClick}
          handleSetToDo={handleSetToDo}
        />
      </View>
    );
  };

  return newComponent;
}

export default WithEnhancements;
