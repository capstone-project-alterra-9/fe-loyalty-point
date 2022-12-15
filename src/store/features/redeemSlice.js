import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIRedeem from "../../apis/redeem.api";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const getRedeem = createAsyncThunk("redeem/getRedeem", async () => {
  const response = await APIRedeem.getAllRedeem();
  return response.data.data;
});

const redeemReducer = createSlice({
  name: "redeem",
  initialState,
  extraReducers: {
    [getRedeem.fulfilled]: (state, action) => {
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

export default redeemReducer.reducer;
