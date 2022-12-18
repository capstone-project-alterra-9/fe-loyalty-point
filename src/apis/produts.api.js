import Cookies from "js-cookie";
import axiosInstance from "../configs/axiosInstance";

const token = Cookies.get("token");

const ProductApi = {
  async getAllProduct() {
    try {
      const response = await axiosInstance.get("auth/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      const { message } = error.response.data;
      throw new Error(message);
    }
  },
  async createProduct(data) {
    try {
      const response = await axiosInstance.post("auth/products", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      const { message } = error.response.data;
      throw new Error(message);
    }
  },
};

export default ProductApi;
