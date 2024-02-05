import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import imgGet from "../Asset/pay4.jpg";
import { useFonts } from "expo-font";

export default function GetStarted({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const ToLogin = () => {
    navigation.navigate("Login");
  };

  const ToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={style.container}>
      <View style={style.a}>
        <Image style={style.aImg} source={imgGet} />
      </View>

      <View style={style.b}>
        <Text style={style.b1}>Welcome to</Text>
        <Text style={style.b2}>Super Wallet</Text>
      </View>
      <View style={style.c}>
        <Text style={style.c2}>Now is the time to exchange money easily</Text>
      </View>

      <View style={style.d}>
        <TouchableOpacity onPress={ToLogin} style={style.d1}>
          <Text style={style.d3}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ToRegister} style={style.d2}>
          <Text style={style.d4}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  a: {
    marginTop: 60,
    width: "100%",
    height: 300,

    alignItems: "center",
    justifyContent: "center",
  },
  aImg: {
    width: 400,
    height: 400,
  },
  b: {
    marginTop: 50,

    alignItems: "center",
    width: "100%",
  },
  b1: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 35,
  },
  b2: {
    fontFamily: "Poppins-Medium",
    fontSize: 28,
  },
  c: {
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  c2: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
  },
  d: {
    width: "100%",
    marginTop: 40,
    gap: 20,
  },
  d1: {
    backgroundColor: "#0984e3",
    width: "100%",
    alignItems: "center",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
  },

  d2: {
    backgroundColor: "#00cd00",
    width: "100%",
    alignItems: "center",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
  },
  d3: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 3,
  },
  d4: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    letterSpacing: 3,
  },
});
