import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function ToDoDetails({ route, navigation }) {
  const { text } = route.params;
  return (
    <View style={StyleSheet.container}>
      <Text>{`Done with item\n\t ${text}`}</Text>
    </View>
  );
}

syles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    padding: 24,
  },
});
