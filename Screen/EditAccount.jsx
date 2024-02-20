import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { baseUrl } from "../Utils/BaseUrl";
import Axios from "../Utils/axiosInterceptors";
import JWT from "expo-jwt";
import { useSelector } from "react-redux";
export default function EditAccount({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [customerId, setCustomerId] = useState("");
  const route = useRoute();
  const data = route.params;
  const tokens = useSelector((state) => state.token.value);

  const dataProfile = () => {
    setCustomerId(tokens);
    setFirstName(data.firsName);
    setLastName(data.lastName);
    setPhoneNumber(data.phoneNumber);
    setBirthDate(data.birthDate);
    setGender(data.gender);
    setAddress(data.address);
    setEmail(data.email);
  };

  useEffect(() => {
    dataProfile();

    const key = "secret";
    const token = tokens;

    const hasil = JWT.decode(token, key);

    setCustomerId(hasil.customerId);
  }, [data]);

  const [image, setImage] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const SaveData = async () => {
    try {
      const formData = new FormData();
      formData.append("id", customerId);

      if (image) {
        formData.append("image", {
          uri: image,
          type: "image/jpeg",
          name: "photo.jpg",
        });
      }

      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("phoneNumber", phoneNumber);
      formData.append("birthDate", birthDate);
      formData.append("gender", gender);
      formData.append("address", address);

      const response = await Axios.put(`${baseUrl}/api/customer`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigation.navigate("Profile", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <View style={style.conA}>
        <View style={style.container}>
          <View style={style.aa}>
            <AntDesign
              onPress={() => navigation.goBack()}
              name="left"
              size={24}
              color="black"
            />
            <Text style={style.txt}>Edit Account</Text>
          </View>

          <View style={style.gmbr}>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200, borderRadius: 100 }}
              />
            ) : (
              <View style={style.icon}>
                <Feather
                  onPress={pickImage}
                  name="upload"
                  size={40}
                  color="black"
                />
              </View>
            )}
          </View>
          <View style={style.aa1}>
            <Text style={style.huruf} onPress={pickImage}>
              Upload Gambar
            </Text>
          </View>

          <View style={style.g}>
            <Text style={style.huruf}>First Name : </Text>
            <TextInput
              style={style.textInput}
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <Text style={style.huruf}> Last Name : </Text>
            <TextInput
              style={style.textInput}
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
            <Text style={style.huruf}>Address : </Text>
            <TextInput
              style={style.textInput}
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
            <Text style={style.huruf}>Gender : </Text>
            <TextInput
              style={style.textInput}
              value={gender}
              onChangeText={(text) => setGender(text)}
            />
            <Text style={style.huruf}>Phone number : </Text>
            <TextInput
              style={style.textInput}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
            />
            <Text style={style.huruf}>Birthdate </Text>
            <TextInput
              style={style.textInput}
              value={birthDate}
              onChangeText={(text) => setBirthDate(text)}
            />
          </View>

          <View>
            <TouchableOpacity style={style.button} onPress={SaveData}>
              <Text style={{ color: "white" }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  aa: {
    alignItems: "center",
    flexDirection: "row",
    gap: 80,
    marginTop: 20,
  },
  conA: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15,
  },
  textInput: {
    borderWidth: 0.5,
    borderBottomColor: "grey",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#0984e3",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  txt: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
  },
  gmbr: {
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 100,
  },
  icon: {
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: "grey",
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 75,
  },
  tbl: {
    borderRadius: 10,
    width: 170,
    height: 50,
    backgroundColor: "#0984e3",
    alignItems: "center",
    justifyContent: "center",
  },
  aa1: {
    alignItems: "center",
    marginBottom: 40,
  },
  g: {
    gap: 5,
    backgroundColor: "white", // Tambahkan background color untuk menghilangkan bayangan pada bagian dalam
    shadowOffset: {
      width: 0,
      height: 1, // Mengubah ketinggian bayangan agar menjadi lebih tipis
    },

    shadowOpacity: 0.2, // Mengurangi opacity bayangan untuk membuatnya lebih tipis
    shadowRadius: 2, // Mengubah radius bayangan
    elevation: 2, // Tetapkan elevasi untuk efek bayangan pada Android
    padding: 10,
    borderRadius: 10,
  },
  huruf: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
  },
});
