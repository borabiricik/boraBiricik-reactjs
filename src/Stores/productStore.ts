import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Constants/api";
import { IProductsInitialState } from "../Types/Product";

const initialState: IProductsInitialState = {
  products: null,
  isLoading: false,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = api.get("/products");

  return response;
});

const productStore = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.data;
      state.isLoading = false;
    });
  },
});

export default productStore.reducer;
