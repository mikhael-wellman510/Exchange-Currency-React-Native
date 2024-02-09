import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";

export default function EnterAmmount({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  const [text, onChangeText] = useState("");

  const PickMoney = (value) => {
    onChangeText(value);
  };
  console.log("ini", typeof text);
  const GoToConfirmation = () => {
    navigation.navigate("Confirmation");
  };

  return (
    <>
      <View style={style.container}>
        <View style={style.a}>
          <Text style={style.t}>Enter Ammount : </Text>
          <Text style={style.t}> Fee IDR 2.000</Text>
        </View>

        <View style={style.b}>
          <Text style={style.aa}>IDR</Text>
          <TextInput
            keyboardType="numeric"
            style={style.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
      </View>
      <View style={style.ac}>
        <TouchableOpacity onPress={() => PickMoney("50000")} style={style.btn2}>
          <Text style={style.tx}>IDR 50.000</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => PickMoney("75000")} style={style.btn2}>
          <Text style={style.tx}>IDR 75.000</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => PickMoney("100000")}
          style={style.btn2}
        >
          <Text style={style.tx}>IDR 100.000</Text>
        </TouchableOpacity>
      </View>

      <View style={style.btt}>
        <TouchableOpacity style={style.btn} onPress={GoToConfirmation}>
          <Text style={style.txt}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 30,
    borderRadius: 8,
    borderColor: "#ced0d1",
    // borderWidth: 1,
    backgroundColor: "#f3f4f5",
    marginLeft: 15,
    marginRight: 15,
  },
  a: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  b: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    width: 280,
    height: 40,
    fontSize: 20,
    paddingLeft: 10,
    fontWeight: "bold",
  },
  aa: {
    fontSize: 20,
    fontFamily: "Poppins-Medium",
  },
  btn: {
    marginTop: 70,
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#0984e3",
    justifyContent: "center",
    alignItems: "center",
  },
  btn2: {
    height: 50,
    backgroundColor: "#f3f4f5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 100,
  },
  tx: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
  },
  txt: {
    color: "white",
    fontWeight: "bold",
    fontFamily: "Poppins-Medium",
    letterSpacing: 2,
  },
  t: {
    fontFamily: "Poppins-Medium",
    color: "#6b7280",
  },
  btt: {
    marginLeft: 15,
    marginRight: 15,
  },
  ac: {
    marginTop: 40,
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-evenly",
    gap: 30,
    // backgroundColor: "red",
  },
});
