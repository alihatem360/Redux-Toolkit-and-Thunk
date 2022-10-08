import counterReducer from "./countSlice";
import toggleShow from "./ToggelCounter";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { counter: counterReducer, toggelValue: toggleShow },
});
export default store;
