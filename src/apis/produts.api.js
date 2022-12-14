// import Cookies from "js-cookie";
import axiosInstance from "../configs/axiosInstance";
// import { deleteProduct } from "../store/features/productSlice";

// const token = Cookies.get("token");

const tokenpostman =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWlud2ViQGdtYWlsLmNvbSIsImV4cCI6MTY3MTAxNDc1NywidXNlcm5hbWUiOiJhZG1pbndlYiJ9.ZnIdP-FfS1CSpeOOQQfXPlMA7VD0CSraMY5Oqm7ELSY";

const ProductsAPI = {
  async getAllProducts() {
    try {
      const response = await axiosInstance.get("/auth/products", {
        headers: {
          Authorization: `Bearer ${tokenpostman}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
  async inputProduct(data) {
    try {
      const response = await axiosInstance.post("/auth/products", data, {
        headers: {
          Authorization: `Bearer ${tokenpostman}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
  async editProduct(data) {
    try {
      const id = data.ID;
      const response = await axiosInstance.patch(`auth/products/${id}`, data, {
        headers: {
          Authorization: `Bearer ${tokenpostman}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
  async deleteProduct(id) {
    try {
      const response = await axiosInstance.delete(`auth/products/${id}`);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default ProductsAPI;
