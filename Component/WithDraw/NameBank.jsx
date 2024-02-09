import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import kartu from "../../Asset/kartu.png";
import { FontAwesome } from "@expo/vector-icons";
export default function NameBank() {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <View style={style.container}>
      <View>
        <Image style={style.img} source={kartu} />
      </View>

      <View style={style.a}>
        <Text style={style.t}>Bank Of Enigma</Text>
        <Text style={style.t}>**** **** **** 1121</Text>
      </View>
      <View>
        <Text style={style.t}>Balance</Text>
        <Text style={style.t}>IDR 1,850,000,00</Text>
      </View>
      <View>
        <FontAwesome name="check-circle" size={24} color="green" />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f5",
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-between",
    padding: 10,

    borderRadius: 8,
    borderColor: "#ced0d1",
  },
  img: {
    width: 70,
    height: 70,
  },
  a: {
    justifyContent: "center",
    alignItems: "center",
  },
  t: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    color: "#6b7280",
  },
});
