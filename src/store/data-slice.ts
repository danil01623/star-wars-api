import { createSlice } from "@reduxjs/toolkit";

const INITIALSTATE = {
  listData: [],
  selectedFilterValue: "",
  isLoading: false,
  selectedItem: {},
};

const dataSlice = createSlice({
  name: "data",
  initialState: INITIALSTATE,
  reducers: {
    listData(state, action) {
      state.listData = action.payload;
    },
    changeFilterValue(state, action) {
      state.selectedFilterValue = action.payload;
    },
    isLoading(state) {
      state.isLoading = !state.isLoading;
    },
    selectedItem(state, action) {
      state.selectedItem = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
