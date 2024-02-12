import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";
export default function BodyMC() {
  //   const exchange = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://v6.exchangerate-api.com/v6/95d6fc3bf95178f15061160a/pair/EUR/GBP/2"
  //       );
  //       console.log("hasil: ", response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   useEffect(() => {
  //     exchange();
  //   }, []);

  return (
    <View style={style.container}>
      <Text style={style.txt1}>Available Balance</Text>
      <Text style={style.txt}>IDR 2.000.000</Text>
      <Text style={style.txt2}>
        Please Select a Country Currency from which you want to do the money
        transfer
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 40,
    gap: 20,
  },
  txt: {
    fontSize: 25,
    color: "#0984e3",
  },
  txt1: {
    fontSize: 18,
  },
  txt2: {
    fontSize: 18,
  },
});
