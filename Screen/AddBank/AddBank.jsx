import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import YourCard from "./YourCard";
export default function AddBank({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  const [bankAcc, setBankAcc] = useState(true);
  const GoHome = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      {bankAcc ? (
        <YourCard navigation={navigation} />
      ) : (
        <View style={style.container}>
          <View style={style.ukuran}>
            <View style={style.h}>
              <View style={style.row}>
                <AntDesign
                  onPress={GoHome}
                  name="arrowleft"
                  size={24}
                  color="black"
                />
              </View>
              <View>
                <Text style={{ fontFamily: "Poppins-Bold" }}>Add Bank</Text>
              </View>
            </View>

            <View style={style.judul}>
              <Text style={style.text2}>
                To Add a new card , please fill out the fields below carefully
                in order to add card successfully
              </Text>
            </View>

            <View style={style.data}>
              <View>
                <Text style={style.text}>Card Number</Text>
                <TextInput
                  placeholder="ex - 0931-5131-5321-6477"
                  style={style.input}
                />
              </View>

              <View>
                <Text style={style.text}>Holders Name</Text>
                <TextInput style={style.input} />
              </View>
              <View>
                <Text style={style.text}>Expiry Date</Text>
                <TextInput style={style.input} />
              </View>
              <View>
                <Text style={style.text}>CVV</Text>
                <TextInput style={style.input} />
              </View>
              <View style={style.tbl}>
                <TouchableOpacity style={style.button}>
                  <Text
                    style={{ fontFamily: "Poppins-SemiBold", color: "white" }}
                  >
                    Confirm
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  ukuran: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 35,
  },
  h: {
    flexDirection: "row",

    height: 50,
    alignItems: "center",
    gap: 100,
  },
  row: {
    borderWidth: 1,
    borderColor: "grey",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  judul: {
    marginTop: 70,
  },
  data: {
    marginTop: 40,
    gap: 30,
  },
  input: {
    borderBottomWidth: 1,
    height: 50,
  },

  text: {
    fontFamily: "Poppins-SemiBold",
    color: "#0984e3",
  },
  text2: {
    fontFamily: "Poppins-SemiBold",
    color: "#6b7280",
  },
  button: {
    height: 60,
    width: 250,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0984e3",
  },
  tbl: {
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
});
