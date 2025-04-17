import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import s from "./App.style";
import backroundImage from "./assets/todo5.png";
import MyTodo from "./components/apps/myTodoApp/MyTodo";

export default function App() {
  return (
    <ImageBackground
      source={backroundImage}
      style={{ height: "100%" }}
      imageStyle={{ opacity: 0.1 }}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <MyTodo />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
