import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { clearToken } from "../Redux/tokenSlice";
import { useSelector } from "react-redux";
import { baseUrl } from "../Utils/BaseUrl";
import { useRoute } from "@react-navigation/native";
import JWT from "expo-jwt";

export default function Profile({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [images, setImages] = useState("");
  const [customerId, setCustomerId] = useState("");
  const tokens = useSelector((state) => state.token.value);
  const route = useRoute();
  const dataEdit = route.params;

  // useEffect(() => {
  //   const decoded = jwtDecode(tokens);
  // }, []);

  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my-key");

      const key = "secret";
      const decoded = JWT.decode(value, key);

      const response = await axios.get(
        `${baseUrl}/api/customer/${decoded.customerId}`
      );
      console.log("rr", response.data);
      setFirstName(response.data.data.firstName);
      setLastName(response.data.data.lastName);
      setPhoneNumber(response.data.data.phoneNumber);
      setBirthDate(response.data.data.birthDate);
      setGender(response.data.data.gender);
      setAddress(response.data.data.address);
      setEmail(response.data.data.userCredential.email);
      setImages(response.data.data.images);
    } catch (error) {
      console.log("errors bos");
    }
  };

  useEffect(() => {
    getData();
  }, [dataEdit]);

  const datas = {
    firsName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    birthDate: birthDate,
    gender: gender,
    address: address,
    email: email,
    images: images,
  };
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("my-key");
      console.log("success");
    } catch (e) {
      // remove error
    }

    console.log("Done.");
  };

  const GoToLogout = () => {
    removeValue();
    dispatch(clearToken());
  };

  const GoToEditAccount = () => {
    navigation.navigate("EditAccount", datas);
  };

  return (
    <>
      <View style={style.con}>
        <View style={style.container}>
          <View style={style.a}>
            <AntDesign name="left" size={24} color="black" />
            <Text style={style.teks}>Account Info</Text>
          </View>
          <View style={style.icon}>
            {images ? (
              <Image
                style={{ width: 100, height: 100 }}
                source={{
                  uri: images,
                }}
              />
            ) : (
              <MaterialCommunityIcons
                name="face-woman-shimmer-outline"
                size={70}
                color="black"
              />
            )}
          </View>
          <View>
            <View style={style.info}>
              <Text style={style.teks}>Personal Info</Text>
            </View>
            <View style={style.text}>
              <Text style={style.teks}>
                Your Name : {`${firstName} ${lastName}`}
              </Text>
              <Text style={style.teks}>Phone Number : {phoneNumber}</Text>
              <Text style={style.teks}>Birth Date : {birthDate}</Text>
              <Text style={style.teks}>Gender : {gender}</Text>
              <Text style={style.teks}>Addrres: {address}</Text>
              <Text style={style.teks}>Email: {email}</Text>
            </View>
            <View style={style.editBtn}>
              <TouchableOpacity style={style.btn} onPress={GoToEditAccount}>
                <Text style={style.teks1}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.btn2} onPress={GoToLogout}>
                <Text style={style.teks1}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  con: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },

  container: {
    marginTop: 50,

    marginRight: 15,
    marginLeft: 15,
  },
  a: {
    flexDirection: "row",
    alignItems: "center",
    gap: 120,
    height: 50,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  info: {
    marginTop: 40,
    alignSelf: "center",
  },
  btn: {
    width: "100%",
    height: 50,
    backgroundColor: "#0984e3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btn2: {
    width: "100%",
    height: 50,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  t: {
    color: "white",
  },
  text: {
    marginTop: 0,
    gap: 18,
    borderColor: "grey",
    backgroundColor: "white", // Tambahkan background color untuk menghilangkan bayangan pada bagian dalam
    shadowOffset: {
      width: 0,
      height: 1, // Mengubah ketinggian bayangan agar menjadi lebih tipis
    },
    shadowOpacity: 0.2, // Mengurangi opacity bayangan untuk membuatnya lebih tipis
    shadowRadius: 2, // Mengubah radius bayangan
    elevation: 2, // Tetapkan elevasi untuk efek bayangan pada Android
    padding: 20,
    borderRadius: 10,
  },
  editBtn: {
    marginTop: 30,
    gap: 10,
  },
  teks: {
    fontFamily: "Poppins-Medium",
  },
  teks1: {
    fontFamily: "Poppins-Medium",
    color: "white",
  },
});
