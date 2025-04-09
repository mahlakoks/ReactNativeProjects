import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function ToDoDetails({ route, navigation }) {
  const { text } = route.params;
  return (
    <View>
      <Text>{`Done with item\n\t ${text}`}</Text>
    </View>
  );
}
