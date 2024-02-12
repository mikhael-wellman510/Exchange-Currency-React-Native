import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import store from "../Redux/store";
import { Provider } from "react-redux";

import Login from "../Screen/Login";
import Register from "../Screen/Register";
import GetStarted from "../Screen/GetStarted";
import MyTabs from "./MyTabs";
import TopUP from "../Screen/TopUp/TopUP";
import WithDraw from "../Screen/WithDraw/WithDraw";
import Confirmation from "../Screen/WithDraw/Confirmation";
import Transfer from "../Screen/Transfer/Transfer";
import TransferSucces from "../Screen/Transfer/TransferSucces";

import MoneyChanger from "../Screen/MoneyChanger/MoneyChanger";

const Stack = createNativeStackNavigator();
export default function Navigation() {
  const [token, setToken] = useState(false);
  return (
    <>
      {token && token ? (
        <View style={styles.container}>
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
        </View>
      ) : (
        <Provider store={store}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="MyTabs"
          >
            <Stack.Screen name="MyTabs" component={MyTabs} />
            <Stack.Screen name="TopUP" component={TopUP} />
            <Stack.Screen name="WithDraw" component={WithDraw} />
            <Stack.Screen name="Confirmation" component={Confirmation} />
            <Stack.Screen name="Transfer" component={Transfer} />
            <Stack.Screen name="TransferSucces" component={TransferSucces} />
            <Stack.Screen name="MoneyChanger" component={MoneyChanger} />
          </Stack.Navigator>
        </Provider>
      )}
    </>
  );
}
