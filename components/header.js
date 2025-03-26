import React from 'react';
import {StyleSheet,Text,View} from 'react-native'

export default function Header(){
  return(
    <View style={styles.headerText}>
      <Text> MyTodo App</Text>
    </View>
  )
}

const styles= StyleSheet.create({
    headerText: {
    marginTop: 50,
    marginHorizontal:10,
    height:60,
    padding:10,
    fontSize: 18,
    backgroundColor: 'lightgray',
  },
});