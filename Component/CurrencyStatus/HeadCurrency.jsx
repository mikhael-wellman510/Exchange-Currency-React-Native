import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ammount } from "../../Redux/counterSlice";
export default function HeadCurrency() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(ammount(input));
    setInput("");
  };

  return (
    <View style={style.container}>
      <View>
        <Text>Last Updated : 26 Jan 2021 , 09:06</Text>
      </View>
      <View style={style.container2}>
        <View style={style.a}></View>
        <View style={style.c}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Enter The Amount You Want"
            style={style.b}
          />
          <TouchableOpacity style={style.c1} onPress={onPress}>
            <Text style={{ color: "white" }}>Cek</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 50,

    // backgroundColor: "orange",
    marginLeft: 20,
    marginRight: 20,
  },
  container2: {
    marginTop: 10,
    gap: 10,
  },

  b: {
    borderWidth: 0.5,
    width: 230,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingLeft: 10,
  },
  c: {
    flexDirection: "row",
    gap: 30,
    justifyContent: "space-between",
  },
  c1: {
    alignItems: "center",
    justifyContent: "center",

    width: 100,
    borderRadius: 10,
    backgroundColor: "#0984e3",
  },
});
