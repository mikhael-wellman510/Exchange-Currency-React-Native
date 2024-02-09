import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

export default function HeadWd({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  const GoBackHome = () => {
    navigation.navigate("MyTabs");
  };

  return (
    <View style={style.container}>
      <View style={style.a}>
        <AntDesign onPress={GoBackHome} name="left" size={20} color="black" />
      </View>
      <View>
        <Text style={style.t}>Withdraw</Text>
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-between",
    backgroundColor: "white",
    marginTop: 40,
  },
  t: {
    fontSize: 25,
    paddingRight: 30,
    fontFamily: "Poppins-Medium",
  },
  a: {
    borderWidth: 0.5,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderColor: "#ced0d1",
  },
});
