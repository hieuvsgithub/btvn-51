import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/IProduct";
import {
  addProduct,
  deleteProduct,
  editProduct,
  fetchProduct,
  oderByIdProduct,
} from "./productAction";

type State = {
  products: IProduct[];
  loading: boolean;
  error?: string | null | undefined;
  productCurrent: IProduct | null;
};

const initialState: State = {
  products: [],
  loading: false,
  error: null,
  productCurrent: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...action.payload];
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(oderByIdProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(oderByIdProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productCurrent = action.payload;
      })
      .addCase(oderByIdProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...state.products, action.payload];
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(editProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const productReducer = productSlice.reducer;

export default productReducer;
