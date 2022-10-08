import { createSlice } from "@reduxjs/toolkit";

const intiaSate = { value: false };
const toggleShow = createSlice({
  name: "toggleShowDutton",
  initialState: intiaSate,
  reducers: {
    toggel: (state, action) => {
      state.value = !state.value;
    },

    lol: (state, action) => {
      state.value = !state.value;
    },
  },
});

export default toggleShow.reducer;
export const { toggel } = toggleShow.actions;
