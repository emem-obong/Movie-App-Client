import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://movie-app-server18.onrender.com",
});

export default axiosInstance;
