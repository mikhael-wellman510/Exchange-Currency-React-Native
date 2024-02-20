import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
          <AntDesign
            onPress={GoHome}
            name="arrowleft"
            size={24}
            color="black"
          />

          <Text>YourCard</Text>
        </View>
        <View style={style.cards}>
          <View>
            <View>
              <Text>Bank Enigma</Text>
            </View>
            <View>
              <MaterialCommunityIcons
                name="integrated-circuit-chip"
                size={36}
                color="gold"
              />
            </View>
            <View>
              <Text>1234 5678 9898 8989</Text>
            </View>

            <Text>A Debit Card</Text>
            <Text> Valid Thru</Text>
            <Text>Sendy Sandoro</Text>
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
  c: {
    marginRight: 15,
    marginLeft: 15,
  },
  tbl: {
    flexDirection: "row",
    marginTop: 30,
    // backgroundColor: "grey",
    height: 50,
    gap: 120,
    alignItems: "center",
  },

  cards: {
    backgroundColor: "grey",
    height: 200,
    width: "90%",
    marginLeft: 20,
    borderRadius: 20,
    padding: 10,
  },
});
