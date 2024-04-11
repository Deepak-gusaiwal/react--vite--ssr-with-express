import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/countSlice";
import { Helmet } from "react-helmet";
const Home = () => {
  const count = useSelector((state) => state.counterSliceReducer.value);
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Home {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
    </>
  );
};

export default Home;
