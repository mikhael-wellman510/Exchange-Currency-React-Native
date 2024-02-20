// axiosInterceptor.js
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("my-key");

    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};

axios.interceptors.request.use(
  async function (config) {
    await getData();
    const token = await AsyncStorage.getItem("my-key");
    console.log("tt", token);

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
