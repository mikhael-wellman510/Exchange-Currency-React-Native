import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import HeadCurrency from "../Component/CurrencyStatus/HeadCurrency";
import BodyCurrency from "../Component/CurrencyStatus/BodyCurrency";

export default function CurrencyStatus() {
  return (
    <View style={style.container}>
      <HeadCurrency />
      <BodyCurrency />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    gap: 35,
  },
});
