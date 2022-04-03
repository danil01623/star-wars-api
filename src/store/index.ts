import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data-slice";
import favoriteSlice from "./favorite-slice";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    favorites: favoriteSlice.reducer,
  },
});

export default store;
