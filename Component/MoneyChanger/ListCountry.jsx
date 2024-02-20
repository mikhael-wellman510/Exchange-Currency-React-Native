import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import amerika from "../../Asset/Country/amerika.png";
import arab from "../../Asset/Country/arab.png";
import australia from "../../Asset/Country/australia.png";
import china from "../../Asset/Country/china.png";
import euro from "../../Asset/Country/euro.png";
import inggris from "../../Asset/Country/inggriss.png";
import jepang from "../../Asset/Country/jepang.png";
import korea from "../../Asset/Country/korea.png";
import singapore from "../../Asset/Country/singapore.png";
import { codeCountry } from "../../damiData/ListCountrTrx";
import axios from "axios";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
export default function ListCountry({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState("");
  const [ammount, setAmmount] = useState("");
  const [total, setTotal] = useState("");
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  const datasImg = [
    { img: euro, backgroundColor: "#F5EEE6" },
    { img: amerika, backgroundColor: "#EEEDEB" },
    { img: jepang, backgroundColor: "#FAF3F0" },
    { img: china, backgroundColor: "#F9F5F6" },
    { img: singapore, backgroundColor: "#BDCDD6" },
    { img: australia, backgroundColor: "#EEF1FF" },
    { img: korea, backgroundColor: "#FDFCE5" },
    { img: arab, backgroundColor: "#E4EFE7" },
    { img: inggris, backgroundColor: "#EDFFEC" },
  ];
  let fixDatas = [];
  const dataCountry = codeCountry;
  let idx = 0;
  for (const i of dataCountry) {
    let datas = { ...dataCountry[idx], ...datasImg[idx] };

    fixDatas.push(datas);
    idx++;
  }

  const ConfirmationPayment = () => {
    Alert.alert(
      "Confirmation",
      "Do you agree to make payment??",
      [
        {
          text: "No",
          onPress: () => console.log("Submission canceled"),
          style: "cancel",
        },
        {
          text: "Yes",

          onPress: () => navigation.navigate("TransferMC"),
          // Navigate to another screen or perform action here
        },
      ],
      { cancelable: false }
    );
  };

  const CekTotal = () => {
    console.log("ini ttl", ammount);
    console.log("hasil cekTotal : ", code);
    const exchange = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/95d6fc3bf95178f15061160a/pair/${code}/IDR/${parseInt(
            ammount
          )}`
        );

        const hasliConversi = response.data.conversion_rate * ammount;
        setTotal(hasliConversi);
        console.log(hasliConversi);
        // console.log("hasils: ", response.data.conversion_rate);
      } catch (error) {
        console.log(error);
      }
    };

    exchange();
  };
  const GoToModal = (id, code) => {
    console.log("hasilll : ", code);
    setModalVisible(true);
    setCode(code);
  };

  const List = ({ id, code, name, img, color, backgroundColor }) => {
    return (
      <>
        <TouchableOpacity onPress={() => GoToModal(id, code)}>
          <View
            style={[style.container2, { backgroundColor: backgroundColor }]}
          >
            <View style={style.aa}>
              <View style={style.ab}>
                <Text style={{ textAlign: "center" }}>{code}</Text>
                <Text>{name}</Text>
              </View>
              <View>
                <Image style={style.img} source={img} />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={style.container}>
      <FlatList
        data={fixDatas}
        renderItem={({ item, idx }) => (
          <List
            id={item.id}
            code={item.code}
            name={item.name}
            img={item.img}
            backgroundColor={item.backgroundColor}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.all}>
          <View style={styles.container}>
            <View style={styles.container2}>
              <View style={styles.logo}>
                <AntDesign
                  onPress={() => [
                    setModalVisible(!modalVisible),
                    setTotal(""),
                    setAmmount(""),
                  ]}
                  name="left"
                  size={24}
                  color="black"
                />
              </View>

              <View style={styles.a}>
                <Text style={styles.txt}>
                  Please enter the amount of money transfer in bellow field
                </Text>
                <Text style={styles.txt}>Enter amount</Text>
              </View>
              <View style={styles.inpt}>
                <TextInput
                  placeholder="Example : 3 $"
                  onChangeText={setAmmount}
                  value={ammount}
                  style={styles.input}
                />
              </View>

              <View style={styles.btn1}>
                <TouchableOpacity style={styles.btn} onPress={CekTotal}>
                  <Text
                    style={{ color: "white", fontFamily: "Poppins-Medium" }}
                  >
                    cek
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ttl}>
                <Text style={styles.txt}>Total : </Text>
                <Text style={styles.txt}> IDR {total}</Text>
              </View>

              <TouchableOpacity
                style={styles.btn2}
                onPress={ConfirmationPayment}
              >
                <Text style={{ color: "white", fontFamily: "Poppins-Medium" }}>
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontFamily: "Poppins-Medium",
  },
  all: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "100%",
  },
  container: {
    width: "100%",
    height: 300,
    alignItems: "center",
    marginTop: 150,
  },
  container2: {
    padding: 20,
    backgroundColor: "white",
    width: 350,
    height: 500,
    borderRadius: 10,
  },
  a: {
    marginTop: 20,
    gap: 10,
  },
  input: {
    borderBottomWidth: 0.7,
    height: 30,
    paddingLeft: 10,
  },
  btn1: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginTop: 30,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    height: 40,
    borderRadius: 10,
  },
  inpt: {
    marginTop: 10,
  },
  btn2: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    height: 40,
    borderRadius: 10,
    backgroundColor: "#0984e3",
  },
  ttl: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    height: 50,
    width: 50,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

const style = StyleSheet.create({
  container: {
    marginTop: 80,
    height: 500,
  },
  container2: {
    alignItems: "center",

    width: 120,
    height: 120,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  img: {
    width: 40,
    height: 40,
  },

  aa: {
    alignItems: "center",
  },
  ab: {
    marginBottom: 15,
    marginTop: 5,
    marginTop: 10,
  },
});
