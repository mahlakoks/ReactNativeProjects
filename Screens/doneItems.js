import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import globalStyles from "../shared/globalstyles";
export default function DomeItems({ navigation, route }) {
  const { doneItems = [] } = route.params || {};
  const data = route.params;

  if (data.length === 0) {
    return (
      <View style={globalStyles.item}>
        <Text style={globalStyles.title}>No thing completed</Text>
      </View>
    );
  }

  const Item = ({ item }) => (
    <View style={globalStyles.comleteditem}>
      <Text >{item.text}</Text>
    </View>
  );

  return (
    <View >
      {
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />} 
          keyExtractor={(item) => item.key} 
        />
      }
    </View>
  );
}
