import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      <Text>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 2, // Rounds the corners of the card
    borderWidth: 2, // Sets the width of the border
    margin: 10, // Adds space outside the card
    shadowColor: "#000", // Sets the shadow color to black
    shadowOffset: {
      width: 0, // Horizontal offset of the shadow
      height: 3, // Vertical offset of the shadow
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20, // Android-specific property for shadow effect
  },
});
