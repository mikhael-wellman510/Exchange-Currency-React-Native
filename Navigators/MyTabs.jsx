import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";
import Home from "../Pages/Home";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CurrencyStatus from "../Pages/CurrencyStatus";
import Profile from "../Pages/Profile";
import Color from "../Utils/Color";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyCards from "../Pages/MyCards";
import { FontAwesome } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#0984e3",
          tabBarStyle: {
            width: "100%",
            height: 75,

            elevation: 0, // Remove shadow on Android
            borderTopWidth: 0, // Remove border on iOS
            marginBottom: 2,
            marginTop: 5,
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Tab.Screen
          name="MyCards"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="credit-card-alt" size={24} color={color} />
            ),
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="CurrencyStatus"
          component={CurrencyStatus}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="currency-exchange" size={24} color={color} />
            ),
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="people-alt" size={24} color={color} />
            ),
            tabBarLabel: "",
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const style = StyleSheet.create({
  a: {
    height: 30,
    color: "white",
  },
});
