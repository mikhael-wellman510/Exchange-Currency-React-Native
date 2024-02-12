import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import acc from "../../Asset/acc.jpg";
import { useFonts } from "expo-font";
export default function TransferSucces({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <View style={style.container}>
      <View style={style.c1}>
        <View style={style.cc}>
          <Image style={style.img} source={acc} />
        </View>
        <View style={style.a}>
          <Text style={style.txt2}>Transfer Successful</Text>
          <Text style={style.txt}>
            Transfer are reviewed which may result in delays or funds being
            frozen
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={style.btn1}
        >
          <Text style={style.text2}>Back To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  img: {
    height: 300,
    width: 300,
  },
  cc: {
    alignItems: "center",
    marginTop: 40,
  },
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  a: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  b: {
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  c1: {
    marginLeft: 20,
    marginRight: 20,
  },
  txt: {
    textAlign: "center",
    width: 280,
    fontFamily: "Poppins-Medium",
    color: "#6b7280",
  },
  txt2: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
  },
  btn1: {
    marginTop: 270,
    width: "100%",
    height: 60,
    borderRadius: 15,
    backgroundColor: "#0984e3",
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    fontFamily: "Poppins-Medium",
    color: "white",
  },
});
