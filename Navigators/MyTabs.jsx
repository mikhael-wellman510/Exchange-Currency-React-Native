import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Home from "../Screen/Home";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CurrencyStatus from "../Screen/CurrencyStatus";
import Profile from "../Screen/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activity from "../Screen/Activity";
import { FontAwesome5 } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function MyTabs({ navigation }) {
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
            paddingBottom: 10,

            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={24} color={color} />
            ),
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="history" size={24} color={color} />
            ),
            tabBarLabel: "Activity",
          }}
        />
        <Tab.Screen
          name="CurrencyStatus"
          component={CurrencyStatus}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="currency-exchange" size={24} color={color} />
            ),
            tabBarLabel: "Currency Status",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="people-alt" size={24} color={color} />
            ),
            tabBarLabel: "Profil",
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
