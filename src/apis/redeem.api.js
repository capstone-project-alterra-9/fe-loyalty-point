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
  async createRedeem(data) {
    try {
      const response = await axiosInstance.post(
        "auth/transactions/admin/create",
        data,
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
  async editRedeem(data) {
    try {
      const ID = data.ID;
      const response = await axiosInstance.put(
        `auth/transactions/${ID}`,
        data,
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
  async deleteRedeem(ID) {
    try {
      const response = await axiosInstance.delete(`auth/transactions/${ID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      const { message } = error.response.data;
      throw new Error(message);
    }
  },
};

export default RedeemApi;
