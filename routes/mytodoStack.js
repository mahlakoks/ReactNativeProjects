import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import MyToDos from "../Screens/mytodos";
import ToDoDetails from "../Screens/tododetails";
import DoneItems from '../Screens/doneItems';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       // initialRouteName="mytodos"
        screenOptions={{
          headerStyle: { backgroundColor: "gray" },
          headerTintColor: "white",
          height:20,
        }}
      >
        <Stack.Screen
          name="MyTodos"
          component={MyToDos}
          options={{
           headerTitle: "My Todo App", 
           // headerTitle: ()=><Header />, //
          }}
        />
         <Stack.Screen
          name="Todo Details"
          component={ToDoDetails}
          options={{
           headerTitle: "Todo Details", 
           // headerTitle: ()=><Header />, //
          }}
        />
           <Stack.Screen
          name="DoneItems"
          component={DoneItems}
          options={{
           headerTitle: "Completed", 
           // headerTitle: ()=><Header />, //
          }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
