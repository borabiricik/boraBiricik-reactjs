import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Constants/api";
import { IProductsInitialState } from "../Types/Product";

const initialState: IProductsInitialState = {
  products: null,
  filteredProducts: null,
  isLoading: false,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = api.get("/products");

  return response;
});

const productStore = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProductsByKeyword: (state, action) => {
      state.filteredProducts =
        state.products &&
        state.products?.filter((product) =>
          product.name.toLowerCase().includes(action.payload.toLowerCase())
        );
    },
  },
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

export const { filterProductsByKeyword } = productStore.actions;
