import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { data } from "../../damiData/data.js";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import { useFonts } from "expo-font";
export default function ListTransaction() {
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  const [tanggal, setTanggal] = useState("");
  useEffect(() => {
    time();
  }, []);
  const time = async () => {
    try {
      const data = await axios.get(
        "http://worldtimeapi.org/api/timezone/Asia/Jakarta"
      );

      const datas = data.data.datetime;
      const [datePart, timePart] = datas.split("T");
      const [year, month, day] = datePart.split("-");

      setTanggal(`${day}-${month}-${year}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleItemPress = (id, typeTransaction) => {
    console.log("Items dengan ID", id, typeTransaction, "diklik!");
  };

  let icon;
  //TODO: ini untuk  menentukan logo
  const Item = ({ id, name, total, typeTransaction, onPress }) => {
    if (typeTransaction === "Transfer") {
      icon = (
        <FontAwesome6 name="money-bill-transfer" size={24} color="black" />
      );
    } else if (typeTransaction === "Top Up") {
      icon = <MaterialIcons name="monetization-on" size={24} color="black" />;
    } else if (typeTransaction === "Change Currency") {
      icon = <MaterialIcons name="currency-exchange" size={24} color="black" />;
    } else {
      // Ikon default jika tidak ada jenis transaksi yang cocok
      icon = (
        <FontAwesome6 name="money-bill-trend-up" size={24} color="black" />
      );
    }

    return (
      <TouchableOpacity onPress={() => onPress(id, typeTransaction)}>
        <View style={style.container}>
          <View style={style.a}>
            <View style={style.a1}>
              <View>{icon}</View>
            </View>

            <View>
              <Text style={style.text}>{name}</Text>
              <Text style={style.text3}>{typeTransaction}</Text>
            </View>
          </View>

          <View>
            <Text
              style={{
                color: typeTransaction == "Top Up" ? "green" : "black",
                fontFamily: "Poppins-SemiBold",
                fontSize: 13,
              }}
            >
              {typeTransaction == "Transfer" ||
              typeTransaction == "Change Currency" ||
              typeTransaction == "With Draw"
                ? "-"
                : "+"}
              IDR {total}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={style.b}>
        <Text style={style.text}>Today , {tanggal} </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            name={item.name}
            total={item.total}
            typeTransaction={item.typeTransaction}
            onPress={handleItemPress}
          />
        )}
        keyExtractor={(item) => item.id}
        style={{ height: 220 }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#f1f2f3",
    marginBottom: 10,
    borderRadius: 15,
  },

  a: {
    flexDirection: "row",

    alignItems: "center",

    marginRight: 70,
  },
  a1: {
    width: 50,
  },
  b: {
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontFamily: "Poppins-SemiBold",
  },
  text3: {
    color: "#6b7280",
    fontFamily: "Poppins-SemiBold",
  },
});
