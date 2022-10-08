import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "../ReducerSlices/counterSlice";
import { login, logout } from "../ReducerSlices/authSlice";

const CounterTollKite = () => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello React redux</h1>

      {globalState.auth.login && (
        <>
          <div className="counter">
            <h2>{globalState.counter.value}</h2>
          </div>
          <div className="">
            <button
              className="btn btn-warning m-3 "
              onClick={() => {
                dispatch(increment());
              }}
            >
              Increment +
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                dispatch(decrement());
              }}
            >
              Decrement -
            </button>
          </div>
        </>
      )}

      <div className="auth">
        <button
          className="btn btn-success m-3"
          onClick={() => dispatch(login())}
        >
          Login
        </button>
        <button className="btn btn-danger" onClick={() => dispatch(logout())}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default CounterTollKite;
