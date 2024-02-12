import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function Transaction({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  const GoToMoneyChanger = () => {
    navigation.navigate("MoneyChanger");
  };

  const GoToTransfers = () => {
    navigation.navigate("Transfer");
  };

  const GoToTopUp = () => {
    navigation.navigate("TopUP");
  };

  const GoToWithDraw = () => {
    navigation.navigate("WithDraw");
  };
  return (
    <View style={style.container}>
      <View style={style.a}>
        <MaterialIcons
          onPress={GoToTopUp}
          name="monetization-on"
          size={24}
          color="black"
        />
        <Text style={style.text}>Top Up</Text>
      </View>
      <View style={style.a}>
        <FontAwesome6
          onPress={GoToTransfers}
          name="money-bill-transfer"
          size={24}
          color="black"
        />
        <Text style={style.text}>Transfer</Text>
      </View>
      <View style={style.a}>
        <FontAwesome6
          onPress={GoToWithDraw}
          name="money-bill-trend-up"
          size={24}
          color="black"
        />
        <Text style={style.text}>With Draw</Text>
      </View>
      <View style={style.a1}>
        <MaterialIcons
          onPress={GoToMoneyChanger}
          name="currency-exchange"
          size={24}
          color="black"
        />

        <Text style={style.text1}>Money </Text>
        <Text style={style.text1}>Changer</Text>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f3f4f5",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  a: {
    alignItems: "center",
    gap: 10,

    justifyContent: "center",
  },
  a1: {
    alignItems: "center",
    marginTop: 15,
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins-SemiBold",
  },
  text1: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 13,
  },
});
