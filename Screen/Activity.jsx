import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { baseUrl } from "../Utils/BaseUrl";
import { useFonts } from "expo-font";
// const screenWidth = Dimensions.get("window").width;
export default function Activity() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [currpage, setCurrPage] = useState(0);
  const [totalPage, setTotalpage] = useState(1);
  const [tombol, setTombol] = useState(true);
  const [fontsLoaded] = useFonts({
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  console.log("curr page", currpage);
  console.log("total page", totalPage);
  const GetDatas = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/api/transactions?page=${page}`
      );
      console.log("hasil ", response.data.pagingResponse);
      setCurrPage(response.data.pagingResponse.currentPage + 1);
      setTotalpage(response.data.pagingResponse.totalPage + 1);
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const NextPage = () => {
    if (currpage + 1 > totalPage) {
      setTombol(false);
    } else {
      setPage(page + 1);
      GetDatas();
    }
    GetDatas();
  };

  const BackPage = () => {
    console.log("page", page);
    console.log("total page", totalPage);
    if (currpage < 0) {
    } else {
      setPage(page - 1);
      GetDatas();
    }
  };

  useEffect(() => {
    GetDatas();
  }, []);

  return (
    <View style={style.box}>
      <View style={style.container}>
        <View style={style.judul}>
          <Text>History Transaksi</Text>
        </View>
        <View>
          <View>
            <ScrollView style={style.scrool}>
              {data.map((data, idx) => (
                <>
                  <View key={idx * Math.random()} style={style.containers}>
                    <View style={style.boxez}>
                      <Text style={style.text}>{data.date}</Text>
                      <Text style={style.text}>From : </Text>
                      <Text style={style.text}>
                        Account Number : {data.destination.accountNumber}
                      </Text>
                      <Text style={style.text}>
                        Currency Code : {data.destination.currencyCode}
                      </Text>
                      <Text style={style.text}>
                        Name : {data.destination.firstName}
                      </Text>
                    </View>
                    <View style={style.boxez}>
                      <Text style={style.text}>To : </Text>
                      <Text style={style.text}>
                        Account Number : {data.source.accountNumber}
                      </Text>
                      <Text style={style.text}>
                        Total Ammount : {data.totalAmount}
                      </Text>
                      <Text style={style.text}>
                        Total Fee : {data.totalFee}
                      </Text>
                    </View>
                  </View>
                </>
              ))}
              <View style={style.pagging}>
                <TouchableOpacity onPress={BackPage} style={style.pg1}>
                  <Text>Back </Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.pg2}>
                  <Text>Page {currpage} </Text>
                </TouchableOpacity>

                {tombol ? (
                  <TouchableOpacity style={style.pg2}>
                    <Text>Page {totalPage}</Text>
                  </TouchableOpacity>
                ) : (
                  <Text></Text>
                )}
                {tombol ? (
                  <TouchableOpacity onPress={NextPage} style={style.pg1}>
                    <Text>next</Text>
                  </TouchableOpacity>
                ) : (
                  ""
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  box: {
    backgroundColor: "white",
    flex: 1,
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  judul: {
    marginTop: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  containers: {
    marginTop: 20,
    gap: 30,

    backgroundColor: "#BBE2EC",
    padding: 20,
    borderRadius: 10,
  },
  boxez: {
    backgroundColor: "#FFF6E9",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontFamily: "Poppins-Medium",
  },
  scrool: {
    height: 700,
  },
  pagging: {
    padding: 40,
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    alignItems: "center",
  },
  pg1: {
    height: 40,
    width: 40,
    backgroundColor: "#B7E5B4",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pg2: {
    height: 30,
    width: 60,
    backgroundColor: "#F8FAE5",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
