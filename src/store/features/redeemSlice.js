import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RedeemApi from "../../apis/redeem.api";

const initialState = {
  data: [],
  status: "idie",
  error: null,
  loading: false,
};

export const getAllRedeem = createAsyncThunk(
  "redeem/getAllRedeem",
  async () => {
    try {
      const response = await RedeemApi.getAllRedeem();
      // console.log({ response });
      return response.data.data;
    } catch (error) {
      throw Error(error);
    }
  }
);

const redeemSlice = createSlice({
  name: "redeem",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllRedeem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllRedeem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllRedeem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default redeemSlice.reducer;
