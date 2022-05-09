import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const categoryStore = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {},
});

export default categoryStore.reducer;
