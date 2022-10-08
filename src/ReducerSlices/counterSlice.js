import { createSlice } from "@reduxjs/toolkit";

const initlState = { value: 0 };

// create Reducer
const counterSlice = createSlice({
  name: "counter",
  initialState: initlState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      if (state.value <= 0) {
        return { value: 0 };
      }
      state.value -= 1;
    },
  },
});

// export actions to use in components
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
