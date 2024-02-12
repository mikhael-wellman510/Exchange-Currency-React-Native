import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export default function BodyTf() {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <View style={style.container}>
      <View style={style.a}>
        <Text style={style.text}>Availabel Balance</Text>
      </View>
      <View>
        <Text style={style.text2}>IDR 1,000,000</Text>
      </View>
      <View>
        <Text style={style.text3}>
          Please enter the receiver's bank account number or phone number with
          the amount of transfer request in below fields.
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    gap: 20,
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
  text2: {
    fontSize: 30,
    fontFamily: "Poppins-SemiBold",
    color: "#0984e3",
  },
  text3: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
  },
});
