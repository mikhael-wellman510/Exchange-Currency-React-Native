import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import img2 from "../Asset/pay2.jpg";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
export default function Register({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
  const visibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const visibility1 = () => {
    setIsPasswordVisible1(!isPasswordVisible1);
  };
  const BackToLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={style.container}>
      <View style={style.img2}>
        <Image style={style.img} source={img2} />
      </View>
      <View style={style.a}>
        <Text style={style.a1}>Welcome new user</Text>
        <Text style={style.font}>Register and enjoy our features !</Text>
      </View>

      <View style={style.b}>
        <TextInput
          style={style.bInput}
          placeholderTextColor={"#cccccc"}
          placeholder="Full Name"
        />
        <TextInput
          style={style.bInput}
          placeholderTextColor={"#cccccc"}
          placeholder="Email"
        />
        <View style={style.pass}>
          <TextInput
            secureTextEntry={isPasswordVisible}
            style={style.bInput1}
            placeholder="Password"
            placeholderTextColor={"#cccccc"}
          />
          <MaterialIcons
            onPress={visibility}
            style={style.c2b}
            name="visibility"
            size={24}
            color="black"
          />
        </View>
        <View style={style.pass}>
          <TextInput
            secureTextEntry={isPasswordVisible1}
            style={style.bInput1}
            placeholder="Confirm Password"
            placeholderTextColor={"#cccccc"}
          />
          <MaterialIcons
            onPress={visibility1}
            style={style.c2b}
            name="visibility"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View>
        <TouchableOpacity style={style.d}>
          <Text style={style.font1}>Create Account</Text>
        </TouchableOpacity>
      </View>
      <View style={style.e}>
        <Text>
          Already have an account ?{" "}
          <Text style={style.f} onPress={BackToLogin}>
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
  },
  font: {
    fontFamily: "Poppins-Medium",
  },
  font1: {
    color: "white",
    fontFamily: "Poppins-SemiBold",
  },
  a1: {
    fontFamily: "Poppins-SemiBold",
    color: "#0984e3",
    fontSize: 25,
  },
  img: {
    width: 200,
    height: 200,
  },
  img2: {
    width: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  a: {
    marginTop: 20,
    gap: 10,
  },
  b: {
    marginTop: 20,
    gap: 20,
  },
  bInput: {
    borderColor: "#d4d4d4",
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingLeft: 15,
  },
  bInput1: {
    borderColor: "#d4d4d4",
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingLeft: 15,
    width: "100%",
  },
  pass: { flexDirection: "row", alignItems: "center" },
  c2b: {
    marginLeft: -40,
  },
  d: {
    width: "100%",
    backgroundColor: "#0984e3",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    borderRadius: 8,
  },
  e: {
    alignItems: "center",
    marginTop: 25,
  },
  f: {
    color: "#0984e3",
    fontFamily: "Poppins-SemiBold",
  },
});
