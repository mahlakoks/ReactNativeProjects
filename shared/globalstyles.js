import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  addToDo: {
    margin: 10,
  },
  itemcontainer: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textInput: {
    margin: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  todoItem: {
    padding: 10,
    borderColor: "lightgray",
    borderStyle: "dashed",
    borderWidth: 1,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },container: {
    justifyContent: "center",
    padding: 10,
    backgroundColor: "lightgrey",
  },
  listContainer: {
    flex: 1,
  },comleteditem: {
    padding: 10,
    borderColor: "lightgray",
    borderStyle: "dashed",
    borderWidth: 1,
    margin: 10,
   flex:1,
  }
});

export default globalStyles;
