import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducers from "../Redux/counterSlice";
import transactionReducers from "../Redux/transactionSlice";
import tokenReducers from "../Redux/tokenSlice";
export default configureStore({
  reducer: {
    counter: counterSliceReducers,
    transaction: transactionReducers,
    token: tokenReducers,
  },
});
