import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
//import  CheckBox  from '@react-native-community/checkbox';
import CheckBox from "@react-native-community/checkbox";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function ToDoItem({ item, pressHandler ,navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false); // Initialize state

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Todo Details',item)}>
      <View style={styles.todoItem}>
        {/* <CheckBoxr
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        /> */}
        <Text>{item.text}</Text>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <MaterialIcons
            style={styles.deleteIcon}
            name="delete"
            size={20}
            color="lightgray"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    borderColor: "lightgray",
    borderStyle: "dashed",
    borderWidth: 1,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteIcon: {
    // You can add additional styles for the delete icon here
  },
});
