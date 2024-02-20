import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import img2 from "../Asset/pay2.jpg";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { baseUrl } from "../Utils/BaseUrl";
import axios from "axios";
import Axios from "../Utils/axiosInterceptors";
export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCek, setPasswordCek] = useState("");
  const [passErr, setPassErr] = useState(true);
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(true);
  const visibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const visibility1 = () => {
    setIsPasswordVisible1(!isPasswordVisible1);
  };
  const BackToLogin = () => {
    navigation.navigate("Login");
  };

  const AddData = async () => {
    console.log(
      firstName,
      lastName,
      phoneNumber,
      birthDate,
      gender,
      address,
      email,
      password
    );

    if (password === passwordCek) {
      try {
        const respons = await Axios.post(`${baseUrl}/api/auth/register`, {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          birthDate: birthDate,
          gender: gender,
          address: address,
          email: email,
          password: password,
        });

        console.log(respons);
        navigation.navigate("Login");
      } catch (error) {
        console.log(error);
      }
    } else {
      setPassErr(false);
    }
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

      <ScrollView>
        <View style={style.b}>
          <TextInput
            style={style.bInput}
            placeholderTextColor={"#cccccc"}
            placeholder="FirstName"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={style.bInput}
            placeholderTextColor={"#cccccc"}
            placeholder="LastName"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <TextInput
            style={style.bInput}
            placeholderTextColor={"#cccccc"}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <TextInput
            style={style.bInput}
            placeholderTextColor={"#cccccc"}
            placeholder="1999-28-05"
            value={birthDate}
            onChangeText={(text) => setBirthdate(text)}
          />
          <TextInput
            style={style.bInput}
            placeholderTextColor={"#cccccc"}
            placeholder="Gender"
            value={gender}
            onChangeText={(text) => setGender(text)}
          />
          <TextInput
            style={style.bInput}
            placeholderTextColor={"#cccccc"}
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <TextInput
            style={style.bInput}
            placeholderTextColor={"#cccccc"}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {passErr ? (
            ""
          ) : (
            <Text style={{ color: "red" }}>Password is not the same</Text>
          )}

          <View style={style.pass}>
            <TextInput
              secureTextEntry={isPasswordVisible}
              style={style.bInput1}
              placeholder="Password"
              placeholderTextColor={"#cccccc"}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <MaterialIcons
              onPress={visibility}
              style={style.c2b}
              name="visibility"
              size={24}
              color="black"
            />
          </View>
          {passErr ? (
            ""
          ) : (
            <Text style={{ color: "red" }}>Password is not the same</Text>
          )}
          <View style={style.pass}>
            <TextInput
              secureTextEntry={isPasswordVisible1}
              style={style.bInput1}
              placeholder="Confirm Password"
              placeholderTextColor={"#cccccc"}
              value={passwordCek}
              onChangeText={(text) => setPasswordCek(text)}
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
          <TouchableOpacity style={style.d} onPress={AddData}>
            <Text style={style.font1}>Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={style.e}>
          <Text>
            Already have an account ?
            <Text style={style.f} onPress={BackToLogin}>
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
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
    marginTop: 20,
  },
  a: {
    marginTop: 20,
    gap: 10,
    marginBottom: 20,
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
    marginBottom: 40,
  },
  f: {
    color: "#0984e3",
    fontFamily: "Poppins-SemiBold",
  },
});
