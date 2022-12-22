import Cookies from "js-cookie";
import axiosInstance from "../configs/axiosInstance";
import { createUser, deleteUser, editUser } from "../store/features/userSlice";

const token = Cookies.get("token");

const BuyApi = {
  async getAllBuy() {
    try {
      const response = await axiosInstance.get("auth/transactions/method/buy", {
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

export default BuyApi;
