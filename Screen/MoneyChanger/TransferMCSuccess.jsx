import { View, Text } from "react-native";
import React from "react";
import TransferSuccesMC from "../../Component/MoneyChanger/TransferSuccesMC";

export default function TransferMCSuccess({ navigation }) {
  return (
    <View>
      <TransferSuccesMC navigation={navigation} />
    </View>
  );
}
