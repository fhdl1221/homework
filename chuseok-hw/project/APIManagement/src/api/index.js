import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// 응답 인터셉터
axiosInstance.interceptors.response.use((response) => {
  return response["data"];
});

export default axiosInstance;
