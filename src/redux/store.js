import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./countSlice";
export const store = configureStore({
  reducer: { counterSliceReducer: counterSlice.reducer },
});
