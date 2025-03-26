import React from "react";
import {
  TouchableOpacity,
  CheckBox,
  TextInput,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { RadioButton } from "react-native-paper";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function ToDoIteam({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.textItem}>
      <MaterialIcons name="delete" size={20} color="lightgray" />
      <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textItem: {
    padding: 10,
    borderColor: "lightgray",
    borderStyle: "dashed",
    borderWidth: 1,
    margin: 10,
    flexDirection: "row",
  },
});
