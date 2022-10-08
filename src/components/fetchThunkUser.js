import React from "react";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUSers } from "../toolkitThunk/thunkFetchDate";

const fetchThunkUser = () => {
  const dispatch = useDispatch();
  const { status, error, data } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUSers());
  }, [dispatch]);

  return (
    <>
      <h1>Fetch User Data using Redux Toolkit and Thunk</h1>
      {status === "failed" && <h1>{error}...</h1>}
      {status === "loading" && <h1>Loading...</h1>}

      {status === "succeeded" && (
        <>
          <div className="row m-0 p-0">
            {data.map((item) => (
              <div className="col-sm-12 col-lg-3" key={item.id}>
                <div className="card bg-dark m-2">
                  <div className="image-header w-100">
                    <img
                      src={`https://robohash.org/${item.id}?set=set2&size=180x180`}
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
        </>
      )}
    </>
  );
};

export default fetchThunkUser;
