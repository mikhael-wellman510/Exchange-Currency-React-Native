import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { currency } from "../../damiData/data";
import img from "../../Asset/Country/euro.png";
import axios from "axios";
import { codeName } from "../../damiData/data";
import { FontAwesome } from "@expo/vector-icons";
import amerika from "../../Asset/Country/amerika.png";
import arab from "../../Asset/Country/arab.png";
import australia from "../../Asset/Country/australia.png";
import china from "../../Asset/Country/china.png";
import euro from "../../Asset/Country/euro.png";
import inggris from "../../Asset/Country/inggriss.png";
import jepang from "../../Asset/Country/jepang.png";
import korea from "../../Asset/Country/korea.png";
import singapore from "../../Asset/Country/singapore.png";
import { dataCountries } from "../../damiData/CountryImage";
import { useSelector, useDispatch } from "react-redux";
export default function BodyCurrency() {
  const [currencies, setCurrencys] = useState([]);
  const [ammount, setAmmount] = useState(20);
  const [baseChange, setBaseChange] = useState("IDR");
  const datasImg = [
    euro,
    amerika,
    jepang,
    china,
    singapore,
    australia,
    korea,
    arab,
    inggris,
  ];

  // TODO: -> dari redux untk ambil dri HeadCurrency

  const getCurrency = async () => {
    const tempCurr = [];
    let temp = 0;

    try {
      for (const item of codeName) {
        const datas = await axios.get(
          `https://v6.exchangerate-api.com/v6/95d6fc3bf95178f15061160a/pair/${item}/${baseChange}/${ammount}`
        );

        tempCurr.push({
          code: item,
          result: datas.data.conversion_result,
          ammounts: ammountRedux,
          changeTo: baseChange,
          flag: datasImg[temp],
          nameMoney: dataCountries[temp].flag,
        });
        temp++;
      }

      setCurrencys(tempCurr);
    } catch (error) {
      console.log(error);
    }
  };
  const ammountRedux = useSelector((state) => state.counter.value);
  console.log("aa", ammountRedux);
  useEffect(() => {
    getCurrency();
  }, [ammountRedux]);

  console.log("hasil redux", ammountRedux);
  const ListCurrency = ({
    ammount,
    changeTo,
    code,
    result,
    id,
    flag,
    nameMoney,
  }) => {
    return (
      <View key={id}>
        <View style={style.a}>
          <View style={style.e}>
            <View>
              <Image style={style.d} source={flag} />
            </View>
            <View style={style.aa}>
              <Text style={{ textAlign: "left" }}>{code}</Text>
              <Text>{nameMoney}</Text>
            </View>
          </View>

          <View style={style.b}>
            <Text>{ammount} </Text>
            <Text>{code} = </Text>
            <Text>{changeTo}</Text>
            <Text> {result}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <FlatList
        data={currencies}
        renderItem={({ item, index }) => (
          <ListCurrency
            id={item.code}
            ammount={item.ammounts}
            changeTo={item.changeTo}
            code={item.code}
            result={item.result}
            flag={item.flag}
            nameMoney={item.nameMoney}
          />
        )}
        keyExtractor={(item) => item.code}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: 620,

    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
  },
  a: {
    // borderWidth: 0.5,
    backgroundColor: "#f3f4f5",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    // backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  aa: {
    gap: 10,

    textAlign: "right",
  },
  b: {
    // backgroundColor: "red",
    flexDirection: "row",
  },
  c: {
    textAlign: "right",
  },
  d: {
    width: 20,
    height: 20,
  },
  e: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    gap: 20,
  },
});
