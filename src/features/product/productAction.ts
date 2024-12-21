import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProduct,
  getAllProduct,
  getByIdProduct,
  removeProduct,
  updateProduct,
} from "../../services/productService";
import { IProduct } from "../../interfaces/IProduct";
import { AxiosError } from "axios";
import { CANCELLED } from "node:dns/promises";

const fetchProduct = createAsyncThunk<IProduct[]>(
  "products/fetchProduct",
  async (_, { rejectWithValue }) => {
    try {
      return await getAllProduct();
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch products");
    }
  }
);

const oderByIdProduct = createAsyncThunk<IProduct, { id: number }>(
  "products/oderByIdProduct",
  async (id, { rejectWithValue }) => {
    try {
      return getByIdProduct(+id);
    } catch (error: unknown) {
      const errorAxios = error as AxiosError;
      console.log(errorAxios);
      if (!errorAxios.response) {
        throw error;
      }
      return rejectWithValue(
        errorAxios.response.data || `Cannot get product with id ${id}`
      );
    }
  }
);

const addProduct = createAsyncThunk<IProduct, IProduct>(
  "products/addProduct",
  async (product, { rejectWithValue }) => {
    try {
      return createProduct(product);
    } catch (error) {
      return rejectWithValue(error.message || "Cannot add product");
    }
  }
);

const editProduct = createAsyncThunk<IProduct, { id: number; data: IProduct }>(
  "products/editProduct",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      return await updateProduct(id, data);
    } catch (error) {
      return rejectWithValue(error.message || "Cannot edit product");
    }
  }
);

const deleteProduct = createAsyncThunk<number, { id: number }>(
  "products/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      return removeProduct(+id);
    } catch (error) {
      return rejectWithValue(error.message || "Cannot delete product");
    }
  }
);

export {
  fetchProduct,
  oderByIdProduct,
  addProduct,
  editProduct,
  deleteProduct,
};
