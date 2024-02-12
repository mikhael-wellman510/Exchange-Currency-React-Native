import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function HeadTransfers({ navigation }) {
  const BackToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={style.container}>
      <View style={style.back}>
        <AntDesign onPress={BackToHome} name="left" size={20} color="black" />
      </View>
      <View style={style.a}>
        <Text>Transfer Request</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 40,
    height: 40,
    width: "100%",
    flexDirection: "row",

    gap: 100,
    width: "100%",
  },
  back: {
    borderColor: "#ced0d1",
    width: 40,
    height: 40,
    borderWidth: 0.5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  a: {
    justifyContent: "center",
    alignItems: "center",
  },
});
