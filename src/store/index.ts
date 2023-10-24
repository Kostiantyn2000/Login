import { RootState } from "./rootReducer";
import { configureStore, Store } from "@reduxjs/toolkit";
import createRootReducer from "./rootReducer";

export const store = configureStore({
  reducer: createRootReducer,
});
