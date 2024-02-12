import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
export default function TransferTrx({ navigation }) {
  const [noAccount, setNoAccount] = useState("");
  const [total, setTotal] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  console.log(noAccount);

  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  const [modalVisible, setModalVisible] = useState(false);
  const OpenModal = () => {
    setModalVisible(true);
  };
  const GoToTransactionSucces = () => {
    navigation.navigate("TransferSucces");
  };

  const BackToTf = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <View style={style.container}>
        <View style={style.a}>
          <Text style={style.txt}>Sender's Account No.</Text>
          <TextInput
            onChangeText={setNoAccount}
            value={noAccount}
            style={style.input}
            placeholder="example 0931-5331-2356-6477"
          />
        </View>
        <View>
          <Text style={style.txt}>Amount of Transfer Request</Text>
          <TextInput
            onChangeText={setTotal}
            value={total}
            style={style.input}
          />
        </View>
        <View>
          <Text style={style.txt}>Enter a message</Text>
          <TextInput
            onChangeText={setMessage}
            value={message}
            style={style.input}
          />
        </View>

        <TouchableOpacity onPress={OpenModal} style={style.btn}>
          <Text style={style.txt2}>Press Here</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={style.buram}>
            <View style={style.modal1}>
              <View style={style.back}>
                <AntDesign
                  onPress={BackToTf}
                  name="left"
                  size={24}
                  color="black"
                />
              </View>

              <View style={style.modal2}>
                <Text style={style.judul}>Transfer Confirmation</Text>
              </View>
              <View style={style.modal3}>
                <View style={style.m2}>
                  <View style={style.m3}>
                    <Text>From</Text>
                    <Text style={style.textB}>Tommy</Text>
                  </View>
                  <View>
                    <Text style={style.txtMod}>Bank Of Enigma</Text>
                    <Text style={style.textB}>1123-2325-5678-1213</Text>
                  </View>
                </View>
                <View style={style.m2}>
                  <View>
                    <Text>To </Text>
                    <Text style={style.textB}>{to} </Text>
                  </View>

                  <View>
                    <Text style={style.txtMod}>Bank OCBC </Text>
                    <Text style={style.textB}>{noAccount} </Text>
                  </View>
                </View>

                <View style={style.m2}>
                  <Text style={style.txtMod}>Total</Text>
                  <Text style={style.textB}>{total}</Text>
                </View>

                <View style={style.b}>
                  <TouchableOpacity
                    onPress={() => GoToTransactionSucces()}
                    style={style.btn2}
                  >
                    <Text style={style.txt2}>Ok, Send Now!</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 40,
    // backgroundColor: "grey",
    gap: 20,
  },

  // Modal
  modal1: {
    marginTop: 180,
    padding: 30,
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 40,
    borderWidth: 0.5,
    justifyContent: "center",
    borderRadius: 8,
  },
  judul: {
    fontFamily: "Poppins-Bold",
    color: "#0984e3",
  },
  buram: {
    flex: 1,

    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  textB: {
    fontFamily: "Poppins-Medium",
    color: "#0984e3",
  },
  TextC: {
    fontFamily: "Poppins-Medium",
    color: "white",
  },
  modal2: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },
  modal3: {
    gap: 30,
  },
  m2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtMod: {
    textAlign: "right",
  },
  b: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn2: {
    height: 50,
    width: "80%",
    borderRadius: 14,
    backgroundColor: "#0984e3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  btn: {
    height: 50,
    width: "100%",
    borderRadius: 14,
    backgroundColor: "#0984e3",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  // Modal
  a: {
    gap: 10,
  },
  input: {
    borderBottomColor: "#0984e3",
    borderBottomWidth: 1,
    fontFamily: "Poppins-Medium",
    padding: 10,
  },
  txt: {
    fontFamily: "Poppins-Medium",
    color: "#0984e3",
  },
  txt2: {
    fontFamily: "Poppins-Medium",
    color: "white",
  },
});
