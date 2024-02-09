import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import mc from "../../Asset/a.png";
import { useFonts } from "expo-font";
export default function Card2() {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <View style={style.container}>
      <Text
        style={{ color: "white", fontSize: 18, fontFamily: "Poppins-SemiBold" }}
      >
        IDR 100.000.00
      </Text>
      <Image style={{ width: 50, height: 50 }} source={mc} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#0984e3",
    height: 70,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 30,
    // paddingTop: 23,
    paddingRight: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
