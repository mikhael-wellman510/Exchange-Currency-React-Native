import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import mc from "../../Asset/a.png";
export default function YourCard({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });
  const GoHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={style.container}>
      <View style={style.c}>
        <View style={style.tbl}>
          <View style={style.back}>
            <AntDesign
              onPress={GoHome}
              name="arrowleft"
              size={24}
              color="black"
            />
          </View>

          <Text style={{ fontFamily: "Poppins-Bold", fontSize: 20 }}>
            Your Card
          </Text>
        </View>
        <View style={style.cards}>
          <View style={style.cc}>
            <View style={style.bank}>
              <Text style={style.texts}>Bank Enigma</Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="integrated-circuit-chip"
                size={45}
                color="gold"
                style={{ marginLeft: 10 }}
              />
            </View>
            <View style={style.no}>
              <Text style={{ fontSize: 20, letterSpacing: 4, marginLeft: 26 }}>
                1234 5678 9898 8989
              </Text>
            </View>
            <View style={style.datas}>
              <View style={style.aa}>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Poppins-Medium",
                    color: "white",
                  }}
                >
                  VALID
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Poppins-Medium",
                    color: "white",
                  }}
                >
                  THRU
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 10, color: "white" }}>Month/Year</Text>
                <Text style={{ color: "white" }}> 12/99</Text>
              </View>
              <View>
                <Image
                  style={{ width: 40, height: 40, marginLeft: 40 }}
                  source={mc}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={style.profil}>
          <View style={style.z}>
            <Text style={style.bck}>Card Number</Text>
            <Text style={style.bcc}>0988 - 1268 - 1888 - 9999</Text>
          </View>
          <View style={style.z}>
            <Text style={style.bck}>Holders Name</Text>
            <Text style={style.bcc}>Baskara Restu Wirawan</Text>
          </View>
          <View style={style.z}>
            <Text style={style.bck}>Expiry Date</Text>
            <Text style={style.bcc}>11/25</Text>
          </View>
          <View style={style.z}>
            <Text style={style.bck}>CVV</Text>
            <Text style={style.bcc}>8824</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  texts: {
    fontFamily: "Poppins-Medium",
    color: "white",
  },
  bck: {
    fontSize: 12,
  },
  bcc: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
  },
  cc: {
    marginLeft: 0,
  },
  back: {
    borderWidth: 1,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  name: {
    marginLeft: 10,
    marginTop: 5,
  },
  c: {
    marginRight: 15,
    marginLeft: 15,
  },
  tbl: {
    flexDirection: "row",
    marginTop: 30,

    height: 50,
    gap: 90,
    alignItems: "center",
  },
  aa: {
    justifyContent: "center",
    alignContent: "center",
  },
  datas: {
    marginLeft: 90,
    marginTop: 18,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  cards: {
    backgroundColor: "#201658",
    height: 200,
    width: "90%",
    marginLeft: 20,
    borderRadius: 20,
    padding: 15,
    paddingTop: 15,
    marginTop: 100,
  },
  bank: {
    marginLeft: 210,
  },
  no: {
    marginTop: 10,
    backgroundColor: "white",
    marginLeft: -15,
    marginRight: -15,
    justifyContent: "center",
  },

  profil: {
    marginTop: 60,
    gap: 15,
    backgroundColor: "#F5F7F8",
    borderRadius: 15,
    padding: 30,
  },

  z: {
    gap: 2,
  },
});
