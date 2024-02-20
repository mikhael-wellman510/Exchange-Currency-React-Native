import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import sc from "../../Asset/suc.jpg";
import { useFonts } from "expo-font";
export default function TransferSuccesMC({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  const GoToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={style.container}>
      <View style={style.c2}>
        <View style={style.c3}>
          <Image style={style.img} source={sc} />
        </View>
        <View style={style.c4}>
          <Text style={style.tx}>Transfer Successful</Text>
          <Text style={style.txt}>
            Transfer are reviewed which may result in delays or fund being
            frozen
          </Text>
        </View>
        <TouchableOpacity style={style.btn} onPress={GoToHome}>
          <Text style={style.txt2}>Press Here</Text>
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
  img: {
    width: 300,
    height: 300,
  },
  c2: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
  },
  c3: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  tx: {
    fontFamily: "Poppins-Bold",
    fontSize: 25,
  },
  c4: {
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  txt: {
    textAlign: "center",
    width: 300,
    fontFamily: "Poppins-Bold",
  },
  txt2: {
    color: "white",
  },
  btn: {
    marginTop: 190,
    width: "100%",
    height: 40,
    backgroundColor: "#0984e3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
