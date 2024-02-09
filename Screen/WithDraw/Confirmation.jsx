import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeadConfirm from "../../Component/Confirmation/HeadConfirm";
import SubmitTransaction from "../../Component/Confirmation/SubmitTransaction";

export default function Confirmation({ navigation }) {
  return (
    <View style={style.container}>
      <HeadConfirm navigation={navigation} />
      <SubmitTransaction navigation={navigation} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginRight: 15,
    marginLeft: 15,
  },
});
