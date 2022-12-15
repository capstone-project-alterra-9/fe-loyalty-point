import Cookies from "js-cookie";
import axiosInstance from "../configs/axiosInstance";

const token = Cookies.get("token");

const APIUsers = {
  async getAllUsers() {
    try {
      const response = await axiosInstance.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response;
    } catch (error) {
      console.log(error.message);
    }
  },
};

export default APIUsers;
