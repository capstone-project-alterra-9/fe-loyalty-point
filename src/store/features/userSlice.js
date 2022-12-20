import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserApi from "../../apis/users.api";

const initialState = {
  data: [],
  status: "idie",
  error: null,
  loading: false,
};

export const getAllUser = createAsyncThunk("user/getAllUser", async () => {
  try {
    const response = await UserApi.getAllUser();
    // console.log({ response });
    return response.data.data;
  } catch (error) {
    throw Error(error);
  }
});

export const createUsers = createAsyncThunk(
  "product/createProduct",
  async (data) => {
    try {
      const response = await UserApi.createUsers(data);
      // console.log({ response });
      return response.data.data;
    } catch (error) {
      throw Error(error);
    }
  }
);

export const deleteUsers = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    try {
      const response = await UserApi.deleteUsers(id);
      // console.log(response);
      return response;
    } catch (error) {
      console.log("error", error);
      throw Error(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createUsers.fulfilled, (state) => {
        state.loading = !state.loading;
      })
      .addCase(createUsers.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.loading = !state.loading;
        state.data = state.data.filter((val) => val.ID !== action.meta.arg);
      });
  },
});

export default userSlice.reducer;
