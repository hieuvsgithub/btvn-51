import instance from ".";
import { IUser } from "../interfaces/IUser";

const getAllUser = async () => {
  try {
    const { data } = await instance.get("/users");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getByIdUser = async (id: number) => {
  try {
    const { data } = await instance.get(`/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (dataBody: IUser) => {
  try {
    const { data } = await instance.post(`/users`, dataBody);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllUser, getByIdUser, createUser };
