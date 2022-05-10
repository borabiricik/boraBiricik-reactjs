import { configureStore } from "@reduxjs/toolkit";
import categoryStore from "./categoryStore";
import productStore from "./productStore";

export const store =  configureStore({
  reducer: {
    products: productStore,
    category: categoryStore
  },
  middleware: (defaultMiddleware) => defaultMiddleware({serializableCheck:false}),
  devTools:true
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
