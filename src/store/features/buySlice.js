import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BuyApi from "../../apis/buy.api";

const initialState = {
  data: [],
  status: "idie",
  error: null,
  loading: false,
};

export const getAllBuy = createAsyncThunk("buy/getAllBuy", async () => {
  try {
    const response = await BuyApi.getAllBuy();
    // console.log({ response });
    return response.data.data;
  } catch (error) {
    throw Error(error);
  }
});

const buySlice = createSlice({
  name: "buy",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllBuy.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllBuy.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllBuy.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default buySlice.reducer;
