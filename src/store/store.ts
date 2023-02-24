import { configureStore } from "@reduxjs/toolkit";
import { storeApi } from "./rtk/api/storeapi";
export const store = configureStore({
  reducer: {
    [storeApi.reducerPath]: storeApi.reducer,
  },
  middleware(def) {
    return def({ serializableCheck: false }).concat(storeApi.middleware);
  },
});
