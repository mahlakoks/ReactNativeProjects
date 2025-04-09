import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  mytodo: {
    //flex: 1,
    backgroundColor: "black",
    marginBottom: 10,
    backgroundColor: "lightblue",
  },
  tosocounts: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    //backgroundColor:"red",
    marginBottom: 5,
    borderRadius: 2,
    borderWidth: 1,
    marginHorizontal: 10,
  },
  calltoaction: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  input: {
    alignSelf: "center",
    width: 300,
    borderRadius: 1,
    borderWidth: 1,
    padding: 10,
    marginTop: 5,
  },
  inputText: {
    paddingTop: 10,
    alignSelf: "flex-start",
  },
  headerName: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  button: {
    borderRadius: 2,
    backgroundColor: "lightyellow",
    padding: 2,
  },
});

export default s;
