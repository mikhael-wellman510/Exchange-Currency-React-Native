import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    value: 0,
  },
  reducers: {
    ammount: (state, action) => {
      state.value = action.payload;
      //   console.log("redux : ", action.payload);
    },
  },
});

export const { ammount } = transactionSlice.actions;

export default transactionSlice.reducer;
