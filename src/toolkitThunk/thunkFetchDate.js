import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUSers = createAsyncThunk(
  "thunkDate/getUSers",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const ThunkDateApiSlice = createSlice({
  name: "thunkDate",
  initialState: { status: "", error: null, data: [] },
  reducers: {},
  extraReducers: {
    [getUSers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUSers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [getUSers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;    },
  },
});

export default ThunkDateApiSlice.reducer;
