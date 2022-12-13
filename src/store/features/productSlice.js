import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import Products from "../../apis/produts.api";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const response = await Products.getAllProducts();
  console.log("response", response.data.data);
  return response.data.data;
});

export const inputProduct = createAsyncThunk(
  "product/inputProduct",
  async ({ category, name, description, price, stock, image }) => {
    try {
      const response = await Products.saveProduct({
        category,
        name,
        description,
        price,
        stock,
        image,
      });
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    await axios.delete(
      // `https://638087368efcfcedac0756ff.mockapi.io/products/${id}`
      // `localhost:8000/api/products/:id`
      `https://be-loyalty-point-production-d38a.up.railway.app/api/products/:id`
    );
    return id;
  }
);

export const editProduct = createAsyncThunk(
  "product/editProduct",
  async ({ id, category, name, description, price, stock, image }) => {
    const response = await axios.patch(
      "https://be-loyalty-point-production-d38a.up.railway.app/api/products/:id",
      {
        headers: {
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWlud2ViQGdtYWlsLmNvbSIsImV4cCI6MTY3MDQxMDExNCwidXNlcm5hbWUiOiJhZG1pbndlYiJ9.FaYFwtypwL27he5sNi6We2oaATdU41xZ5RmSTkIc-cQ",
        },
      },
      { category, name, description, price, stock, image }
    );
    // const response = await axios.patch(
    //   // `https://638087368efcfcedac0756ff.mockapi.io/products/${id}`,
    //   // `localhost:8000/api/products/:id`,
    //   `https://be-loyalty-point-production-d38a.up.railway.app/api/products/:id`,
    //   {
    //     category,
    //     name,
    //     description,
    //     price,
    //     stock,
    //     image,
    //   }
    // );
    return response.data;
  }
);
const productEntity = createEntityAdapter({
  selectId: (product) => product.ID,
});

const productReducer = createSlice({
  name: "product",
  initialState: productEntity.getInitialState(),
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      // state.data = action.payload;
      productEntity.setAll(state, action.payload);
    },
    [inputProduct.fulfilled]: (state, action) => {
      productEntity.addOne(state, action.payload);
    },
    [deleteProduct.fulfilled]: (state, action) => {
      productEntity.removeOne(state, action.payload);
    },
    [editProduct.fulfilled]: (state, action) => {
      productEntity.updateOne(state, {
        id: action.payload.id,
        updates: action.payload,
      });
    },
  },
});

export const productSelectors = productEntity.getSelectors(
  (state) => state.product
);

export default productReducer.reducer;
