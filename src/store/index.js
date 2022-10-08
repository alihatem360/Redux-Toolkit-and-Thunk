import { legacy_createStore as createStore } from "redux";

const initialState = { value: 0, ShowContan: false };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type === "decrement") {
    return { ...state, value: state.value - action.payload };
  }

  if (action.type === "toggleShow") {
    return { ...state, ShowContan: !state.ShowContan };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
