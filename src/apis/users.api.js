import Cookies from "js-cookie";
import axiosInstance from "../configs/axiosInstance";

const token = Cookies.get("token");

const UserApi = {
  async getAllUser() {
    try {
      const response = await axiosInstance.get("/users", {
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

export default UserApi;
