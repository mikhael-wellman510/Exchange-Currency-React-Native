import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

import Login from "../Screen/Login";
import Register from "../Screen/Register";
import GetStarted from "../Screen/GetStarted";
import MyTabs from "./MyTabs";

import WithDraw from "../Screen/WithDraw/WithDraw";
import Confirmation from "../Screen/WithDraw/Confirmation";
import Transfer from "../Screen/Transfer/Transfer";
import TransferSucces from "../Screen/Transfer/TransferSucces";

import MoneyChanger from "../Screen/MoneyChanger/MoneyChanger";
import TransferMCSuccess from "../Screen/MoneyChanger/TransferMCSuccess";
import EditAccount from "../Screen/EditAccount";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import AddBank from "../Screen/AddBank/AddBank";
const Stack = createNativeStackNavigator();
export default function Navigation() {
  const [token, setToken] = useState(true);
  const tokens = useSelector((state) => state.token.value);

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("my-key");

        if (value !== null) {
          setToken(false);
        } else {
          setToken(true);
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, [tokens]);

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
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="MyTabs"
        >
          <Stack.Screen name="MyTabs" component={MyTabs} />
          <Stack.Screen name="AddBank" component={AddBank} />
          <Stack.Screen name="WithDraw" component={WithDraw} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name="Transfer" component={Transfer} />
          <Stack.Screen name="TransferSucces" component={TransferSucces} />
          <Stack.Screen name="MoneyChanger" component={MoneyChanger} />
          <Stack.Screen name="TransferMC" component={TransferMCSuccess} />
          <Stack.Screen name="EditAccount" component={EditAccount} />
        </Stack.Navigator>
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
