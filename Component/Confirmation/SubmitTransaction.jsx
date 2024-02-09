import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import acc from "../../Asset/acc.jpg";
export default function SubmitTransaction({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  const [modalVisible, setModalVisible] = useState(false);

  const OpenModal = () => {
    setModalVisible(true);
  };

  const BackHome = () => {
    navigation.navigate("Home");
  };

  return (
    <>
      <View style={style.container}>
        <View style={style.a}>
          <Text style={style.txt}>Withdraw Balance</Text>
          <Text style={style.txt1}>IDR 100000</Text>
        </View>
        <View style={style.a}>
          <Text style={style.txt}>Fee</Text>
          <Text style={style.txt1}>IDR 2000</Text>
        </View>
        <View style={style.a1}>
          <Text style={style.txt}>Total </Text>
          <Text style={style.txt12}>IDR 102000</Text>
        </View>
        <View style={style.d}>
          <TouchableOpacity onPress={OpenModal} style={style.b}>
            <Text style={style.e}>Confirm Withdraw</Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={sModal.container}>
            <View style={sModal.aa}>
              <View style={sModal.a}>
                <View>
                  <Image style={sModal.bb} source={acc} />
                </View>
                <View style={sModal.bc}>
                  <Text style={sModal.txt}>Withdraw Succes</Text>
                  <Text style={sModal.txt1}>
                    Withdraw are reviewed which may result in delays or funds
                    being frozen
                  </Text>
                </View>
                <View style={sModal.but}>
                  <TouchableOpacity style={sModal.button} onPress={BackHome}>
                    <Text style={sModal.tx}>Back To Home</Text>
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

const sModal = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  txt: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 25,
  },
  txt1: {
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    color: "#6b7280",
  },
  bc: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  but: {
    marginTop: 100,
  },
  aa: {
    marginTop: 220,
    height: 630,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 30,
    padding: 30,

    alignItems: "center",
  },
  a: {
    alignItems: "center",
  },
  tx: {
    color: "white",
  },

  button: {
    width: 350,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  bb: {
    height: 300,
    width: 300,
  },
});

const style = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  txt: {
    fontFamily: "Poppins-Medium",
    color: "#6b7280",
  },
  txt1: {
    fontFamily: "Poppins-Medium",
  },
  txt12: {
    fontFamily: "Poppins-Medium",
    color: "green",
  },
  a: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  a1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 70,
  },
  b: {
    backgroundColor: "#0984e3",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  d: {
    marginTop: 130,
  },
  e: {
    color: "white",
    fontFamily: "Poppins-Medium",
  },
});
