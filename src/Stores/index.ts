import { configureStore } from "@reduxjs/toolkit";
import productStore from "./productStore";

export const store =  configureStore({
  reducer: {
    products: productStore,
  },
  middleware: (defaultMiddleware) => defaultMiddleware({serializableCheck:false})
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
