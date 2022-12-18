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
      });
  },
});

export default userSlice.reducer;
