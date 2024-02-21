import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Utils/BaseUrl";
import { useFonts } from "expo-font";
import JWT from "expo-jwt";

import AsyncStorage from "@react-native-async-storage/async-storage";
export default function BodyMC() {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  const [saldo, setSaldo] = useState("");
  const [ammount, setAmmount] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [pinVisible, setPinVisible] = useState(false);
  const [custId, setCustId] = useState("");
  const [pin, setPin] = useState("");
  const [pinCust, setPinCust] = useState("");
  const [idCurrency, setIdCurrency] = useState("");
  const [ballance, setBallance] = useState(0);
  const saldoIdr = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/account`);

      for (const datas of response.data.data) {
        if (datas.currency.code === "IDR") {
          console.log("hasil", datas.balance);
          setBallance(datas.balance);
        }
      }
      setSaldo(response.data.data[0].balance);
    } catch (error) {
      console.log(error);
    }
  };

  // Get accountId
  const getDatas = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/account`);

      for (const hasil of response.data.data) {
        if (hasil.currency.code == "IDR") {
          console.log("cc", hasil.id);
          setIdCurrency(hasil.id);
        }
      }
      // console.log("accId : ", response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("my-key");

      if (value !== null) {
        const key = "secret";
        const idCustomer = JWT.decode(value, key);
        setCustId(idCustomer.customerId);

        // console.log("hahaha", idCustomer);
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  };

  const getIdCustomer = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/customer/${custId}`);
      setPinCust(response.data.data.userCredential.pin);
      console.log("tes", response.data.data.userCredential.pin);
      // console.log("cuks", response.data.data.userCredential.pin);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    saldoIdr();
    getData();

    getDatas();
  }, []);
  const Deposit = () => {
    setModalVisible(true);
    getIdCustomer();
  };
  const ToPin = () => {
    if (ammount.length == "") {
      console.log("Jumlah tidak boleh kosong");
    } else if (ammount > 5000000) {
      console.log("tidak bisa deposit lebih dari 5.000.000");
    } else {
      setPinVisible(true);
    }

    // console.log("wokwowk", custId);
  };

  const CekPin = async () => {
    try {
      if (pin === pinCust) {
        console.log("success");
        setModalVisible(!modalVisible, setAmmount(""));
        setPinVisible(!pinVisible, setPin(""));

        const postDepo = await axios.post(`${baseUrl}/api/transactions`, {
          accountId: idCurrency,
          pin: pin,
          amount: ammount,
        });
        saldoIdr();

        // Set ACC id , pin,  ammount
      } else {
        console.log("Pin yang anda masukan salah ");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={style.container}>
      <Text style={style.txt1}>Available Balance</Text>
      <Text style={style.txt}>IDR {ballance}</Text>

      <View style={style.deposit}>
        <Text style={{ fontFamily: "Poppins-Medium" }}>
          Your balance is not enough ?{" "}
        </Text>
        <TouchableOpacity style={style.btnDepo} onPress={Deposit}>
          <Text style={{ fontFamily: "Poppins-Medium", color: "white" }}>
            Deposit
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={style.txt2}>
        Please Select a Country Currency from which you want to do the money
        transfer
      </Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deposit</Text>
            <View style={{ marginBottom: 20, gap: 10 }}>
              <View>
                <Text>Input ammount</Text>
                <TextInput
                  value={ammount}
                  onChangeText={(text) => setAmmount(text)}
                  style={style.textInputs}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={{ gap: 20 }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible, setAmmount(""))}
              >
                <Text style={styles.textStyle}>Back</Text>
              </Pressable>
              <Pressable
                onPress={ToPin}
                style={[styles.button, styles.buttonClose2]}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={pinVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!pinVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Input Pin</Text>
            <View style={{ marginBottom: 20, gap: 10 }}>
              <View>
                <Text>Input Your Pin</Text>
                <TextInput
                  value={pin}
                  onChangeText={(text) => setPin(text)}
                  style={style.textInputs}
                />
              </View>
            </View>

            <View style={{ gap: 20 }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setPinVisible(!pinVisible, setPin(""))}
              >
                <Text style={styles.textStyle}>Back</Text>
              </Pressable>
              <Pressable
                onPress={CekPin}
                style={[styles.button, styles.buttonClose2]}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  deposit: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnDepo: {
    backgroundColor: "green",
    height: 40,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
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
  textInputs: {
    borderBottomWidth: 1,
  },
});

// Modal

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: 300,

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
  buttonClose: {
    backgroundColor: "red",
  },
  buttonClose2: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
