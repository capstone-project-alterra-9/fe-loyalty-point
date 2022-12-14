import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductsAPI from "../../apis/produts.api";

const initialState = {
  data: [],
  status: "idie",
  error: null,
  loading: false,
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const response = await ProductsAPI.getAllProducts();
  console.log("response", response.data.data);
  return response.data.data;
});

export const inputProduct = createAsyncThunk(
  "product/inputProduct",
  async (data) => {
    try {
      const response = await ProductsAPI.inputProduct(data);
      console.log("response", response.data.data);
      return response.data.data;
    } catch (error) {
      // throw Error(error);
      console.log("error", error);
    }
  }
);
export const editProduct = createAsyncThunk(
  "product/editProduct",
  async (data) => {
    try {
      const response = await ProductsAPI.editProduct(data);
      return response.data.data;
    } catch (error) {
      // throw Error(error);
      console.log("error", error);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    try {
      const response = await ProductsAPI.deleteProduct(id);
      return response.data.data;
    } catch (error) {
      // throw Error(error);
      console.log("error", error);
    }
  }
);

const productReducer = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(inputProduct.fulfilled, (state) => {
        state.loading = !state.loading;
      })
      .addCase(inputProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editProduct.fulfilled, (state) => {
        state.loading = !state.loading;
      })
      .addCase(deleteProduct.fulfilled, (state) => {
        state.loading = !state.loading;
      });
  },
});

export default productReducer.reducer;
