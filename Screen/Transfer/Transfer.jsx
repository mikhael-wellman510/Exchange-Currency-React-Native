import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeadTransfers from "../../Component/Transfers/HeadTransfers";
import BodyTf from "../../Component/Transfers/BodyTf";
import TransferTrx from "../../Component/Transfers/TransferTrx";

export default function Transfer({ navigation }) {
  return (
    <View style={style.container}>
      <View style={style.a}>
        <HeadTransfers navigation={navigation} />
        <BodyTf />
        <TransferTrx navigation={navigation} />
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
    marginLeft: 20,
    marginRight: 20,
  },
});
