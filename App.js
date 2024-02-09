import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import Navigation from "./Navigators/Navigation";

export default function App() {
  const [token, setToken] = useState(false);
  return (
    <>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "white",
  },
});
