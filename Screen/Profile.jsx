import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
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
  const [pins, setPin] = useState("");
  const [pinErr, setPinErr] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataPin, setDataPin] = useState(false);
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

      setFirstName(response.data.data.firstName);
      setLastName(response.data.data.lastName);
      setPhoneNumber(response.data.data.phoneNumber);
      setBirthDate(response.data.data.birthDate);
      setGender(response.data.data.gender);
      setAddress(response.data.data.address);
      setEmail(response.data.data.userCredential.email);
      setImages(response.data.data.images);

      if (response.data.data.userCredential.pin) {
        setDataPin(true);
      }

      console.log(response.data.data.userCredential.pin, "data custs");
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

  const AddPin = () => {
    setModalVisible(true);
  };
  const SubmitPin = async () => {
    try {
      if (6 == pins.length) {
        const response = await axios.post(`${baseUrl}/api/auth/pin`, {
          pin: pins,
        });
        setModalVisible(!modalVisible);
        setDataPin(true);
        setPin("");
      } else {
        setPinErr(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={style.con}>
        <View style={style.container}>
          <View style={style.a}>
            <AntDesign name="left" size={24} color="black" />
            <Text style={style.teks}>Account Info</Text>
          </View>
          <ScrollView style={style.swipe}>
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
                {dataPin ? (
                  <Text style={style.teks}>Your Pin : * * * * * * </Text>
                ) : (
                  ""
                )}

                <TouchableOpacity style={style.button} onPress={AddPin}>
                  {dataPin ? (
                    <Text style={{ color: "white" }}>Update Pin</Text>
                  ) : (
                    <Text style={{ color: "white" }}>Add Pin</Text>
                  )}
                </TouchableOpacity>
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
          </ScrollView>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.s");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {dataPin ? (
                <Text style={styles.modalText}>Edit Pin!</Text>
              ) : (
                <Text style={styles.modalText}>Add Pin!</Text>
              )}

              <View>
                {pinErr ? (
                  <Text style={{ color: "red" }}>Pin Must 6 Character</Text>
                ) : (
                  ""
                )}

                <Text>Input your Pin : </Text>
                <TextInput
                  value={pins}
                  onChangeText={(text) => setPin(text)}
                  style={styles.textInput}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.btn1}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={SubmitPin}
                >
                  <Text style={styles.textStyle2}>Submit Pin</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose2]}
                  onPress={() => setModalVisible(!modalVisible, setPin(""))}
                >
                  <Text style={styles.textStyle}>Back</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
const style = StyleSheet.create({
  swipe: {
    height: 670,
  },
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
  button: {
    marginLeft: 120,
    backgroundColor: "green",
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

//Modal
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    height: 350,
    width: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose2: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textInput: {
    borderBottomWidth: 1,
    color: "grey",
    marginTop: 20,
  },
  btn1: {
    marginTop: 60,
    gap: 10,
  },
});
