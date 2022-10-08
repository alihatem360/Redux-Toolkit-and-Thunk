import React from "react";

import { useEffect } from "react";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "../ReducerSlices/fetchDataApiSlice";

import { useSelector, useDispatch } from "react-redux";

const FetchData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        dispatch(FETCH_USERS_REQUEST());
        dispatch(FETCH_USERS_SUCCESS(json));
      })
      .catch((error) => {
        dispatch(FETCH_USERS_FAILURE(error));
      });
  }, []);

  const dataSlice = useSelector((state) => state.fetchDataApi.data);
  const errorSlice = useSelector((state) => state.fetchDataApi.error);
  const statusSlice = useSelector((state) => state.fetchDataApi.status);
  console.log(dataSlice, errorSlice, statusSlice);

  return (
    <div>
      <h1 className="my-2 py-2">Fetch Data using Redux toolKit </h1>
      {statusSlice === "failed" && <h1>{errorSlice}</h1>}

      {statusSlice === "loading" && <h1>Loading...</h1>}
      <ul>
        {statusSlice === "succeeded" && (
          <div className="row">
            {dataSlice.map((item) => (
              <div className="col-sm-12 col-lg-3" key={item.id}>
                <div className="card bg-dark m-2">
                  <div className="image-header w-100">
                    <img
                      src={`https://picsum.photos/id/${item.id * 100}/200/300`}
                      className="card-img-top m-2"
                      alt="ss"
                      style={{
                        height: "120px",
                        width: "120px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.name} </h5>
                    <p className="card-text">{item.email}</p>
                    <p className="">{item.phone}</p>
                    <p className="">{item.website}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default FetchData;
