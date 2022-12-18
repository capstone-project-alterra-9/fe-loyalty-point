import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApi from "../../apis/produts.api";

const initialState = {
  data: [],
  status: "idie",
  error: null,
  loading: false,
};

export const getAllProduct = createAsyncThunk(
  "product/getAllProduct",
  async () => {
    try {
      const response = await ProductApi.getAllProduct();
      // console.log({ response });
      return response.data.data;
    } catch (error) {
      throw Error(error);
    }
  }
);

export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data) => {
    try {
      const response = await ProductApi.createProduct(data);
      console.log({ response });
      return response.data.data;
    } catch (error) {
      throw Error(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state) => {
        state.loading = !state.loading;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
