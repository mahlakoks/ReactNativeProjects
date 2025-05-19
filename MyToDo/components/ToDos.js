import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";
import { CheckBox } from "@react-native-community/checkbox";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Checkbox from "expo-checkbox";

import { useTodos } from "../Hooks/useTodos";

export const ToDos = ({
  item,
  todoItem,
  todoStatus,
  handleCheckBox,
  handleDelete,
}) => {
  const { ischecked, setIschecked } = useTodos(todoStatus);

  const deleteHendler = () => {
    handleDelete(item);
  };

  const testhandleCheckBox = (id) => {
    let newCheckedState = false;

    if (!ischecked) {
      newCheckedState = true;
      setIschecked(newCheckedState);
      handleCheckBox(item, newCheckedState);
      return;
    }

    setIschecked(newCheckedState);
    handleCheckBox(item, newCheckedState);
  };

  return (
    <View style={styles.item}>
      <Checkbox
        value={ischecked}
        onValueChange={(id) => testhandleCheckBox(id)}
      />
      <TouchableOpacity
        onPress={() => {
          console.log("item Pressed");
        }}
      >
        <Text>{todoItem}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={(id) => deleteHendler(id)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoscontainer: {
    flex: 1,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  todostabs: {
    flexDirection: "row",
    borderWidth: 8,
    borderWidth: 1,
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 10,
  },
  buttons: {
    fontWeight: "bold",
    borderWidth: 8,
    borderWidth: 1,
    padding: 5,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 2,
    padding: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderStyle: "dotted",
  },
});
