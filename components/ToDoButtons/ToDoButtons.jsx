import s from "./ToDoButtons.style";
import react from "react";
import { View, Text,TouchableOpacity } from 'react-native'

export default function ToDoButtons({handleSubmit}) {
  return (
    <View style={s.calltoaction}>
      <TouchableOpacity style={s.button}>
        <Text onPress={handleSubmit}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.button}>
        <Text>Sort</Text>
      </TouchableOpacity>
      <TouchableOpacity style={s.button}>
        <Text>Completed</Text>
      </TouchableOpacity>
    </View>
  );
}
