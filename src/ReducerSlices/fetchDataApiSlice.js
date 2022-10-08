import { createSlice } from "@reduxjs/toolkit";

const initialState = { status: "", error: null, data: [] };

const fetchDataApiSlice = createSlice({
  name: "fetchDataApi",
  initialState,
  reducers: {
    FETCH_USERS_REQUEST: (state, action) => {
      state.status = "loading";
    },
    FETCH_USERS_SUCCESS: (state, action) => {
      state.status = "succeeded";
      state.data = state.data.concat(action.payload);
    },
    FETCH_USERS_FAILURE: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} = fetchDataApiSlice.actions;

export default fetchDataApiSlice.reducer;
