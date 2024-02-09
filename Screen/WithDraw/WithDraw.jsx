import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeadWd from "../../Component/WithDraw/HeadWd";
import NameBank from "../../Component/WithDraw/NameBank";
import EnterAmmount from "../../Component/WithDraw/EnterAmmount";

export default function WithDraw({ navigation }) {
  return (
    <View style={style.container}>
      <HeadWd navigation={navigation} />
      <NameBank />
      <EnterAmmount navigation={navigation} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // marginLeft: 15,
    // marginRight: 15,
    height: "100%",
  },
});
