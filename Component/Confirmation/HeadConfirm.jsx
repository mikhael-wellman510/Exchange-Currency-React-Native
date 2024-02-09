import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import tr2 from "../../Asset/tr2.png";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
export default function HeadConfirm({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  const GoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <View style={style.c1}>
        <View>
          <AntDesign onPress={GoBack} name="left" size={20} color="black" />
        </View>
        <View>
          <Text style={style.txt}>Confirmation</Text>
        </View>
      </View>
      <View style={style.c2}>
        <Image style={style.img} source={tr2} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  txt: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
  container: {
    marginTop: 40,
  },
  img: {
    width: 250,
    height: 250,
  },
  c1: {
    flexDirection: "row",
    gap: 115,
  },
  c2: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
