import instance from ".";
import { IProduct } from "../interfaces/IProduct";

const getAllProduct = async () => {
  try {
    const { data } = await instance.get("/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getByIdProduct = async (id: number) => {
  try {
    const { data } = await instance.get(`/products/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (dataBody: IProduct) => {
  try {
    const { data } = await instance.post(`/products`, dataBody);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (id: number, dataBody: IProduct) => {
  try {
    const { data } = await instance.patch(`/products/${id}`, dataBody);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const removeProduct = async (id: number) => {
  try {
    await instance.delete(`/products/${id}`);
    return id;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllProduct,
  getByIdProduct,
  createProduct,
  updateProduct,
  removeProduct,
};
