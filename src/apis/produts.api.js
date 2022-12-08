import Cookies from "js-cookie";
import axiosInstance from "../configs/axiosInstance";

const token = Cookies.get("token");

const Products = {
  async getAllProducts() {
    try {
      const response = await axiosInstance.get("/auth/products", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWlud2ViQGdtYWlsLmNvbSIsImV4cCI6MTY3MDUzMzcwMywidXNlcm5hbWUiOiJhZG1pbndlYiJ9.uiyC3vwaOLm5nuFlScznuDx7M0skzxEUsdwPFGo2DA4`,
          // Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
  async saveProduct({ category, name, description, price, stock, image }) {
    try {
      const response = await axiosInstance.post(
        "/auth/products",
        { category, name, description, price, stock, image },
        {
          headers: {
            // Authorization: `Bearer {token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default Products;
