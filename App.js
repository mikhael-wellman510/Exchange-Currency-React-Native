import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import Navigation from "./Navigators/Navigation";
import store from "./Redux/store";
import { Provider } from "react-redux";

export default function App() {
  const [token, setToken] = useState(false);

  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </NavigationContainer>
    </>
  );
}
