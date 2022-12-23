import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RedeemApi from "../../apis/redeem.api";

const initialState = {
  data: [],
  status: "idle",
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

export const createRedeem = createAsyncThunk(
  "redeem/createRedeem",
  async (data) => {
    try {
      const response = await RedeemApi.createRedeem(data);
      // console.log({ response });
      return response.data.data;
    } catch (error) {
      throw Error(error);
    }
  }
);

export const editRedeem = createAsyncThunk(
  "redeem/editRedeem",
  async ({ ID, paymentMethod, userID, productID, identifierNum, status }) => {
    try {
      const response = await RedeemApi.editRedeem({
        ID,
        paymentMethod,
        userID,
        productID,
        identifierNum,
        status,
      });
      return response;
    } catch (error) {
      throw Error(error);
    }
  }
);

export const deleteRedeem = createAsyncThunk(
  "redeem/deleteRedeem",
  async (id) => {
    try {
      const response = await RedeemApi.deleteRedeem(id);
      console.log(response);
      return response;
    } catch (error) {
      console.log("error", error);
      throw Error(error);
    }
  }
);

const redeemSlice = createSlice({
  name: "product",
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
      })
      .addCase(createRedeem.fulfilled, (state) => {
        state.loading = !state.loading;
      })
      .addCase(createRedeem.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editRedeem.fulfilled, (state, action) => {
        state.loading = !state.loading;
        state.data = state.data.map((val) => {
          if (val.id === action.payload.id) {
            return action.payload;
          }
          return val;
        });
        state.currentDetail = action.payload;
        state.loading = false;
      })
      .addCase(deleteRedeem.fulfilled, (state, action) => {
        state.loading = !state.loading;
        state.data = state.data.filter((val) => val.ID !== action.meta.arg);
      });
  },
});

export default redeemSlice.reducer;
