import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/cartSlice";
import favoriteReducer from "../slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
  },
});
