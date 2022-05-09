import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Constants/api";
import { IProductsInitialState } from "../Types/Product";

const initialState: IProductsInitialState = {
  products: null,
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
    addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.data;
    });
  },
});

export default productStore.reducer;
