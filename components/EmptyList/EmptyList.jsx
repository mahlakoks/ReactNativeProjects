import react from "react";
import { Text, View } from "react-native";
import { EmptyListStyle } from "./EmptyList.style";

export function EmptyList({ isdisplayAll }) {
  return (
    <View style={EmptyListStyle.root}>
      {isdisplayAll ? (
        <Text style={EmptyListStyle.text}>
          You do not have any ToDos, please add one!
        </Text>
      ) : (
        <Text style={EmptyListStyle.text}>
          You do not have completed todos...
        </Text>
      )}
    </View>
  );
}
