import axios from "axios";
import CONST from "../../utils/constants";

const config = {
  baseURL: CONST.BASE_URL,
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWlud2ViQGdtYWlsLmNvbSIsImV4cCI6MTY3MDY5MjYyNiwidXNlcm5hbWUiOiJhZG1pbndlYiJ9.M6HXFSosw3vmmdOmMHl4Mc2ARppykESUGupiadthBss",
  },
};

const axiosInstance = axios.create(config);

export default axiosInstance;
