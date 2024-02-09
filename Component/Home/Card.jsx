import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function Card() {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <View style={style.container}>
      <View style={style.a}>
        <MaterialCommunityIcons
          name="integrated-circuit-chip"
          size={40}
          color="white"
        />
        <MaterialCommunityIcons name="signal-variant" size={40} color="white" />
      </View>
      <View style={style.b}>
        <Text
          style={{
            color: "white",
            letterSpacing: 3,
            fontFamily: "Poppins-Bold",
          }}
        >
          **** **** **** 1121
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#1d3a70",
    height: 170,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    gap: 10,
  },
  a: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  b: {
    paddingTop: 50,
    paddingLeft: 20,
  },
});
