import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducers from "../Redux/counterSlice";
import transactionReducers from "../Redux/transactionSlice";
export default configureStore({
  reducer: {
    counter: counterSliceReducers,
    transaction: transactionReducers,
  },
});
