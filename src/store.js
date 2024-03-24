import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartRedux/CartSlice'
export const store = configureStore({
  reducer: {
    allCart: cartReducer,
  },
});
