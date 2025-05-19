import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import s from "./App.style";
import backroundImage from "./assets/todo5.png";
import MyTodo from "./components/apps/myTodoApp/MyTodo";
import Users from "./components/Users/Users";
import Card from "./components/Card/Card";
import store from "./redux/store"
import { Provider } from 'react-redux';

export default function App() {
  return (
    <ImageBackground
      source={backroundImage}
      style={{ height: "100%" }}
      imageStyle={{ opacity: 0.1 }}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
        <Provider store={store}>
            <MyTodo />
            {/* <Users />
            <Card /> */}
        </Provider>   
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
