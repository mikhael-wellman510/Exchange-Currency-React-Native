import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: "",
  },
  reducers: {
    tokens: (state, action) => {
      state.value = action.payload;
    },
    clearToken: (state) => {
      state.value = "";
    },
  },
});

export const { tokens, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
