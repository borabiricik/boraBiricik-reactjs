import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../Constants/api";
import { ICategory } from "../Types/Category";
import { IProductsInitialState } from "../Types/Product";

const initialState: IProductsInitialState = {
  products: null,
  filteredProducts: null,
  currentProduct: null,
  selectedCategory: null,
  keyword: null,
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
    filterProducts: (state) => {
      state.filteredProducts = state.products?.filter((product) => {
        return (
          product.name
            .toLowerCase()
            .includes(state.keyword ? state.keyword : "") &&
          product.category?.includes(
            state.selectedCategory ? state.selectedCategory : ""
          )
        );
      });
    },
    changeCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    changeKeyword: (state, action) => {
      state.keyword = action.payload;
    },
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

export const { filterProducts, changeCategory, changeKeyword } =
  productStore.actions;
