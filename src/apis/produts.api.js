import Cookies from "js-cookie";
import axiosInstance from "../configs/axiosInstance";

const token = Cookies.get("token");

const tokenpostman =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWlud2ViQGdtYWlsLmNvbSIsImV4cCI6MTY3MDg1NDI2MywidXNlcm5hbWUiOiJhZG1pbndlYiJ9.twzYfenjMZnftWmh8465INwRe7xrc3THp0sgWdkE7gE";

const Products = {
  async getAllProducts() {
    try {
      const response = await axiosInstance.get("/auth/products", {
        headers: {
          Authorization: `Bearer ${tokenpostman}`,
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
            Authorization: `Bearer ${tokenpostman}`,
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
