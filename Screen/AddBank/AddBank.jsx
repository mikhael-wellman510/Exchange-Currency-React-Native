import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import YourCard from "./YourCard";
import axios from "axios";
import Axios from "../../Utils/axiosInterceptors";
import { baseUrl } from "../../Utils/BaseUrl";
export default function AddBank({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [bankAcc, setBankAcc] = useState(false);
  const [panjang, setPanjang] = useState(true);
  const GoHome = () => {
    navigation.navigate("Home");
  };

  const getDatas = async () => {
    try {
      const hasil = await Axios.get(`${baseUrl}/api/dummy-bank`);
      if (hasil) {
        setBankAcc(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);
  const handleCard = (input) => {
    // Menghapus semua karakter non-digit dari input
    let formattedInput = input.replace(/\D/g, "");

    // Memformat input setiap empat angka dengan tanda hubung "-"
    formattedInput = formattedInput.replace(/(\d{4})/g, "$1-");

    // Menghapus tanda hubung ekstra yang mungkin muncul di akhir
    formattedInput = formattedInput.replace(/-$/, "");

    // Set nomor kartu yang diformat ke dalam state
    setCardNumber(formattedInput);
  };

  const SendData = async () => {
    console.log("panjang", cardNumber.length);
    if (cardNumber.length == 19) {
      try {
        setPanjang(true);

        const response = await axios.post(`${baseUrl}/api/dummy-bank`, {
          cardNumber: cardNumber,
          holderName: name,
          cvv: cvv,
          expDate: expDate,
        });

        if (response) {
          setBankAcc(true);
        }
        console.log("tes", response);
      } catch (error) {
        console.log(error);
      }
    } else {
      setPanjang(false);
    }
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
                {panjang ? (
                  ""
                ) : (
                  <Text style={{ color: "red" }}>input harus 16 karakter</Text>
                )}
                <Text style={style.text}>Card Number</Text>
                <TextInput
                  placeholder="ex - 0931-5131-5321-6477"
                  style={style.input}
                  value={cardNumber}
                  onChangeText={handleCard}
                  keyboardType="numeric"
                />
              </View>

              <View>
                <Text style={style.text}>Holders Name</Text>
                <TextInput
                  style={style.input}
                  value={name}
                  onChangeText={(text) => setName(text)}
                />
              </View>
              <View>
                <Text style={style.text}>Expiry Date</Text>
                <TextInput
                  style={style.input}
                  placeholder="mm/YY"
                  value={expDate}
                  onChangeText={(text) => setExpDate(text)}
                />
              </View>
              <View>
                <Text style={style.text}>CVV</Text>
                <TextInput
                  placeholder="8824"
                  value={cvv}
                  onChangeText={(text) => setCvv(text)}
                  style={style.input}
                />
              </View>
              <View style={style.tbl}>
                <TouchableOpacity onPress={SendData} style={style.button}>
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
