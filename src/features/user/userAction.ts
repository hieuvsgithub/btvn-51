import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser";
import {
  createUser,
  getAllUser,
  getByIdUser,
} from "../../services/userService";

const fetchUser = createAsyncThunk<IUser[]>(
  "user/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      return await getAllUser();
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch user");
    }
  }
);

const oderByIdUser = createAsyncThunk<IUser, { id: number }>(
  "user/oderByIdUser",
  async (id, { rejectWithValue }) => {
    try {
      return await getByIdUser(+id);
    } catch (error) {
      return rejectWithValue(error.message || `Cannot get user with id ${id}`);
    }
  }
);

const addUser = createAsyncThunk<IUser, IUser>(
  "user/addUser",
  async (user, { rejectWithValue }) => {
    try {
      return createUser(user);
    } catch (error) {
      return rejectWithValue(error.message || "Cannot add user");
    }
  }
);

export { fetchUser, oderByIdUser, addUser };
