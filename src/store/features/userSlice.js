import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIUsers from "../../apis/users.api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getUsers = createAsyncThunk("user/getUsers", async () => {
  const response = await APIUsers.getAllUsers();
  return response.data.data;
});

const userReducer = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      state.data = action.payload;
      // productEntity.setAll(state, action.payload);
      //   },
      //   [inputProduct.fulfilled]: (state, action) => {
      //     productEntity.addOne(state, action.payload);
      //   },
      //   [deleteProduct.fulfilled]: (state, action) => {
      //     productEntity.removeOne(state, action.payload);
      //   },
      //   [editProduct.fulfilled]: (state, action) => {
      //     productEntity.updateOne(state, {
      //       id: action.payload.id,
      //       updates: action.payload,
      //     });
    },
  },
});

export default userReducer.reducer;
