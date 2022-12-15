import Cookies from "js-cookie";
import axiosInstance from "../configs/axiosInstance";

const token = Cookies.get("token");

const APIRedeem = {
  async getAllRedeem() {
    try {
      const response = await axiosInstance.get(
        "/auth/transactions/method/redeem",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            // Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default APIRedeem;
