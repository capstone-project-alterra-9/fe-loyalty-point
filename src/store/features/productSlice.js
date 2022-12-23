import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductApi from "../../apis/produts.api";

const initialState = {
  data: [],
  status: "idle",
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

export const editProduct = createAsyncThunk(
  "product/editProduct",
  async ({ ID, category, name, description, price, stock, image }) => {
    try {
      const response = await ProductApi.editProduct({
        ID,
        category,
        name,
        description,
        price,
        stock,
        image,
      });
      return response;
    } catch (error) {
      throw Error(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    try {
      const response = await ProductApi.deleteProduct(id);
      console.log(response);
      return response;
    } catch (error) {
      console.log("error", error);
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
      })
      .addCase(editProduct.fulfilled, (state, action) => {
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
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = !state.loading;
        state.data = state.data.filter((val) => val.ID !== action.meta.arg);
      });
  },
});

export default productSlice.reducer;
