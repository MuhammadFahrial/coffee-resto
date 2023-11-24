import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
