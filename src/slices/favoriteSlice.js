import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromFavorite: (state, action) => {
      const index = state.items.findIndex(
        (favoriteItem) => favoriteItem.id === action.payload
      );

      let newFavorite = [...state.items];
      newFavorite.splice(index, 1);
      if (index >= 0) {
      }

      state.items = newFavorite;
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;

export const selectItem = (state) => state.favorite.items;
export const selectFull = (state) =>
  state.favorite.items.reduce((total, item) => total + item.price, 0);

export default favoriteSlice.reducer;
