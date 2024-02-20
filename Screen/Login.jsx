import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

import React, { useState } from "react";
import img from "../Asset/pay.png";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { baseUrl } from "../Utils/BaseUrl";
import axios from "axios";
import Axios from "../Utils/axiosInterceptors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { tokens } from "../Redux/tokenSlice";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const ToRegister = () => {
    navigation.navigate("Register");
  };
  const visibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const CekLogin = async () => {
    try {
      const response = await axios.post(`${baseUrl}/api/auth/login`, {
        email: email,
        password: password,
      });
      console.log(response.data);
      dispatch(tokens(response.data.data.token));
      const storeData = async () => {
        try {
          await AsyncStorage.setItem("my-key", response.data.data.token);
        } catch (e) {}
      };

      storeData();
    } catch (error) {
      console.log("error boss");
      setError(true);
    }
  };
  return (
    <View style={style.a}>
      <View style={style.img1}>
        <Image style={style.img} source={img} />
      </View>

      <View style={style.b}>
        <View>
          <Text style={style.b1}>Hello, Welcome Back</Text>
        </View>

        <Text style={style.font}>Log in and enjoy our features! </Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        {error ? (
          <Text style={{ color: "red" }}>Your Email or Password wrong</Text>
        ) : (
          ""
        )}
      </View>

      <View style={style.c}>
        <TextInput
          style={style.c1}
          placeholderTextColor={"#cccccc"}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <View style={style.c2}>
          <TextInput
            secureTextEntry={isPasswordVisible}
            style={style.c1b}
            placeholder="Password"
            placeholderTextColor={"#cccccc"}
            onChangeText={setPassword}
            value={password}
          />
          <MaterialIcons
            onPress={visibility}
            style={style.c2b}
            name="visibility"
            size={24}
            color="black"
          />
        </View>
      </View>
      <View style={style.d}>
        <TouchableOpacity onPress={CekLogin} style={style.d1}>
          <Text style={style.d2}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={style.e}>
        <Text style={style.font}>
          Don't have an account ?
          <Text onPress={ToRegister} style={style.e1}>
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  img1: {
    width: "100%",
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    // backgroundColor: "blue",
  },
  img: {
    width: 250,
    height: 250,
    alignContent: "center",
    justifyContent: "center",
  },
  a: {
    backgroundColor: "white",
    height: "100%",
  },

  b: {
    gap: 5,
    marginBottom: 30,
  },
  b1: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 25,
    color: "#0984e3",
  },
  font: {
    fontFamily: "Poppins-Medium",
  },
  c: {
    gap: 20,
    marginBottom: 50,
  },
  c1: {
    borderColor: "#d4d4d4",
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingLeft: 15,
    fontFamily: "Poppins-SemiBold",
  },
  c1b: {
    borderColor: "#d4d4d4",
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    paddingLeft: 15,
    width: "100%",
    fontFamily: "Poppins-SemiBold",
  },
  c2b: {
    marginLeft: -40,
  },
  c2: {
    flexDirection: "row",

    alignItems: "center",
  },

  d: {
    marginBottom: 50,
    alignItems: "center",
    height: 40,
    justifyContent: "center",
  },
  d1: {
    height: 50,
    backgroundColor: "#0984e3",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  d2: {
    color: "white",
    fontFamily: "Poppins-SemiBold",
    letterSpacing: 1,
  },
  e: {
    // backgroundColor: "grey",

    alignItems: "center",
  },
  e1: {
    color: "#3c9ee9",
    fontWeight: "bold",
  },
});
