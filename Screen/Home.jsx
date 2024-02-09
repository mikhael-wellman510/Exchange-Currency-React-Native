import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Head from "../Component/Home/Head";
import Card from "../Component/Home/Card";
import Card2 from "../Component/Home/Card2";
import Transaction from "../Component/Home/Transaction";
import ListTransaction from "../Component/Home/ListTransaction";

export default function Home({ navigation }) {
  return (
    <>
      <View style={style.container}>
        <Head />
        <Card />
      </View>

      <View style={style.container2}>
        <Card2 />
        <Transaction navigation={navigation} />
        <ListTransaction />
      </View>
    </>
  );
}
const style = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "#0984e3",
    width: "100%",
  },
  container2: {
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "white",
    width: "100%",
  },
});
