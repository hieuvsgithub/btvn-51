import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/IUser";
import { addUser, fetchUser, oderByIdUser } from "./userAction";

type State = {
  users: IUser[];
  loading: boolean;
  error?: string | null;
  userCurrent: IUser | null;
};

const initialState: State = {
  users: [],
  loading: false,
  error: null,
  userCurrent: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [...action.payload];
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(oderByIdUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(oderByIdUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userCurrent = action.payload;
      })
      .addCase(oderByIdUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = [...state.users, action.payload];
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
