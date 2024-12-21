import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import { type } from "node:os";
import userReducer from "../features/user/userSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
