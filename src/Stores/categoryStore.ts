import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Constants/api";
import { ICategoryStoreInitialState } from "../Types/Category";

const initialState: ICategoryStoreInitialState = {
  categories: null,
};

export const getCategories = createAsyncThunk(
  "getCategories",
  async (state) => {
    const response = await api.get("/categories");
    return response;
  }
);

const categoryStore = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload.data;
    });
  },
});

export default categoryStore.reducer;
