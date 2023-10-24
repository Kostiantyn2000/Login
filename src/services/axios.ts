import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 120000,
  baseURL: `https://technical-task-api.icapgroupgmbh.com/api/`,
});

export default axiosInstance;
