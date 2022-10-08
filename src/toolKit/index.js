import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../ReducerSlices/counterSlice";
import authReducer from "../ReducerSlices/authSlice";
import fetchDataApiReducer from "../ReducerSlices/fetchDataApiSlice";
import ThunkFetchDate from "../toolkitThunk/thunkFetchDate";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    fetchDataApi: fetchDataApiReducer,
    users: ThunkFetchDate,
  },
});
export default store;
