import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function Head() {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <View style={style.container}>
      <View style={style.a}>
        <Text style={{ color: "white", fontFamily: "Poppins-Bold" }}>
          Welcome back !
        </Text>
        <Text style={style.b}>Tommy Jason</Text>
      </View>
      <View style={style.c}>
        <Feather name="bell" size={22} color="white" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 60,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
  a: {
    gap: 5,
  },
  b: {
    fontSize: 18,
    color: "white",
    fontFamily: "Poppins-SemiBold",
  },
  c: {
    height: 50,
    width: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
  },
});
