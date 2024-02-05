import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import GetStarted from "./Pages/GetStarted";
import MyTabs from "./Navigators/MyTabs";
import { useState } from "react";
const Stack = createNativeStackNavigator();

export default function App() {
  const [token, setToken] = useState(false);
  return (
    <>
      {token && token ? (
        <View style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="GetStarted"
            >
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />

              <Stack.Screen name="GetStarted" component={GetStarted} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      ) : (
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      )}
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
