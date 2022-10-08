import React, { Fragment } from "react";
import "./App.css";
import CounterTollKite from "./components/CounterTollKite";
import FetchData from "./components/FetchData";
import FetchThunkUser from "./components/fetchThunkUser";
function App() {
  return (
    <Fragment>
      <div className="body">
        <FetchData />
        <FetchThunkUser />
      </div>
    </Fragment>
  );
}

export default App;
