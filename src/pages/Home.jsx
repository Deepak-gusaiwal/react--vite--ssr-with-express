import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/countSlice";
const Home = () => {
  const count = useSelector((state) => state.counterSliceReducer.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
    </div>
  );
};

export default Home;
