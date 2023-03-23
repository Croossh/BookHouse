import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    inputChange(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { inputChange } = searchInputSlice.actions;

export default searchInputSlice.reducer;
