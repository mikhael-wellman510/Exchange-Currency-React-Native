import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
export default function Activity() {
  const datas = [
    { bulan: "Jan", total: 20000 },
    { bulan: "Mar", total: 10000 },
    { bulan: "Desember", total: 50000 },
  ];

  const data = {
    labels: [],
    datasets: [
      {
        data: [],

        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };

  datas.map((idx) => {
    data.labels.push(idx.bulan);
    data.datasets[0].data.push(idx.total);
  });

  return (
    <View>
      <Text>MyCards</Text>
      <LineChart
        style={style.index}
        data={data}
        width={350} // from react-native
        height={300}
        yAxisLabel="Rp."
        chartConfig={{
          backgroundColor: "#edede9",
          backgroundGradientFrom: "#edede9",
          backgroundGradientTo: "#bde0fe",
          decimalPlaces: 0, // optional, defaults to 2dprgb(163,177,138)rgb(2,48,71)
          color: (opacity = 2) => `rgba(163,177,138, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(2,48,71, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "3",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        yAxisSuffix="" // Suffix Rp
      />
    </View>
  );
}
const style = StyleSheet.create({
  index: {
    width: "100%",
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
});
