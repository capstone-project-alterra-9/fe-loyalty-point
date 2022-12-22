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
  async countUsers() {
    try {
      const response = await axiosInstance.get("/users/count", {
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

  async createUsers(data) {
    try {
      const response = await axiosInstance.post("/users/create", data, {
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

  async editUser(data) {
    try {
      const ID = data.ID;
      const response = await axiosInstance.put(`/users/${ID}`, data, {
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

  async deleteUsers(ID) {
    try {
      const response = await axiosInstance.delete(`/users/${ID}`, {
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

export default UserApi;
