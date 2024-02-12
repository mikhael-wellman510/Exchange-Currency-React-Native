import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeadMC from "../../Component/MoneyChanger/HeadMC";
import BodyMC from "../../Component/MoneyChanger/BodyMC";
import ListCountry from "../../Component/MoneyChanger/ListCountry";

export default function MoneyChanger({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.a}>
        <HeadMC navigation={navigation} />
        <BodyMC />
        <ListCountry />
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
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
});
