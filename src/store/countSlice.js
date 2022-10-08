import { createSlice } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";
import { toggel } from "./ToggelCounter";

const initlState = { value: 0 };

const countSlice = createSlice({
  name: "counter",
  initialState: initlState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
  },

  extraReducers: {
    [toggel]: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
