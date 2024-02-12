import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
export default function HeadMC({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  return (
    <View style={style.container}>
      <View style={style.a}>
        <AntDesign
          style={style.b}
          onPress={() => navigation.navigate("Home")}
          name="left"
          size={24}
          color="black"
        />
      </View>

      <Text style={style.txt}>Select Country</Text>
      <Text></Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 70,
    alignItems: "center",

    height: 50,
  },
  txt: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
  },
  a: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#ced0d1",
  },
  b: {},
});
