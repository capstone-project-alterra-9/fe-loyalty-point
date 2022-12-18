import Cookies from "js-cookie";
import axiosInstance from "../configs/axiosInstance";

const token = Cookies.get("token");

const RedeemApi = {
  async getAllRedeem() {
    try {
      const response = await axiosInstance.get(
        "auth/transactions/method/redeem",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      const { message } = error.response.data;
      throw new Error(message);
    }
  },
};

export default RedeemApi;
