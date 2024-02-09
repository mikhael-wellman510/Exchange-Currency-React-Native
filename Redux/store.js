import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducers from "../Redux/counterSlice";
export default configureStore({
  reducer: {
    counter: counterSliceReducers,
  },
});
