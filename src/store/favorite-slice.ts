import { createSlice } from "@reduxjs/toolkit";

const INITIALSTATE = {
  favoriteList: [] as any,
  totalFavoriteAmount: 0 as number,
};

const favoriteSlice = createSlice({
  name: "list",
  initialState: INITIALSTATE,
  reducers: {
    addItemToFavorite(state, action) {
      const item: any = action.payload;
      state.favoriteList.push(item);
      state.totalFavoriteAmount++;
    },
    removeItemFromFavorite(state, action) {
      const name: string = action.payload;
      // copy favoriteList array to update the reducer
      const copyArray = state.favoriteList.filter(
        (item: any) => item.name !== name
      );
      state.favoriteList = [...copyArray];

      state.totalFavoriteAmount--;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

export default favoriteSlice;
