import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import counterReducer from "../features/productList/ProductListSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});