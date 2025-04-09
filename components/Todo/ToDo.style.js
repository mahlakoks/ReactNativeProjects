import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  todo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 1,
    borderWidth: 1,
    padding: 10,
    borderStyle: "dotted",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  modal: {
    flex: 1,
    backgroundColor: "yellow",
    paddingTop: 50,
    alignItems: "center",
    flexGrow: 1,
  },
  modalText: {
    flexDirection: "row",
    padddingTop: 20,
    borderStyle: "solid",
    width: "100%", // flexGrow: 2,
    justifyContent: "center",
  },
});
export default s;
