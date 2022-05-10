import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Constants/api";
import { ICategory } from "../Types/Category";
import { IProductsInitialState } from "../Types/Product";

const initialState: IProductsInitialState = {
  products: null,
  filteredProducts: null,
  currentProduct: null,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await api.get("/products");

  return response;
});

export const getProductById = createAsyncThunk(
  "getProductById",
  async ({ id }: { id: string | number | undefined }) => {
    const response = await api.get(`/products/${id}`);
    return response;
  }
);

const productStore = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.filteredProducts = state.products?.filter(
        (product) =>
          product.name.toLowerCase().includes(action.payload) ||
          product.category === action.payload
      );
    },
    // filterProductsByKeyword: (state, action) => {
    //   state.filteredProducts =
    //     state.products &&
    //     state.products?.filter((product) =>
    //       product.name.toLowerCase().includes(action.payload.toLowerCase())
    //     );
    // },

    // filterProductsByCategory: (state, action) => {
    //   state.filteredProducts = state.products?.filter((product) =>
    //         product.category?.includes(action.payload)
    //       )
    // },
  },
  extraReducers: ({ addCase }) => {
    addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload.data;
    });
    addCase(getProductById.pending, (state, action) => {
      state.currentProduct = null;
    });
    addCase(getProductById.fulfilled, (state, action) => {
      state.currentProduct = action.payload.data;
    });
  },
});

export default productStore.reducer;

export const { filterProducts } =
  productStore.actions;
