import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Constants/api";
import { ICategory } from "../Types/Category";
import { IProductsInitialState } from "../Types/Product";

const initialState: IProductsInitialState = {
  products: null,
  filteredProducts: null,
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

    filterProductsByCategory: (state, action) => {
      state.filteredProducts = state.filteredProducts 
        ? state.filteredProducts.filter((product) =>
            product.category?.includes(action.payload)
          )
        : state.products?.filter((product) =>
            product.category?.includes(action.payload)
          );
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.data;
    });
  },
});

export default productStore.reducer;

export const { filterProductsByKeyword, filterProductsByCategory } =
  productStore.actions;
