import Main from "./src/components/Main";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import NavBar from "./src/components/NavBar";
import { Provider } from "react-redux";
import store from "./src/store/index";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
        <NavBar />
      </NativeRouter>
    </Provider>
  );
}
