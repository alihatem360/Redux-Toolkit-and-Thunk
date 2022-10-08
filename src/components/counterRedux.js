import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterRedux = () => {
  const counter = useSelector((state) => {
    return state.value;
  });
  const Toggleshow = useSelector((state) => state.ShowContan);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "increment", payload: 1 });
  };
  const decrement = () => {
    dispatch({ type: "decrement", payload: 1 });
  };

  const toggel = () => {
    dispatch({ type: "toggleShow" });
  };

  return (
    <>
      <h1>Hello React redux</h1>

      {Toggleshow && (
        <>
          <div className="counter">
            <h2>{counter}</h2>
          </div>
          <div className="">
            <button className="btn btn-warning m-3 " onClick={increment}>
              Increment +
            </button>
            <button className="btn btn-primary" onClick={decrement}>
              Decrement -
            </button>
          </div>
        </>
      )}

      <div>
        <button className="btn btn-primary" onClick={toggel}>
          Toggle Counter
        </button>
      </div>
    </>
  );
};

export default CounterRedux;
