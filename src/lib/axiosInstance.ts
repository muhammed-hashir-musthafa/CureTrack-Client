import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrlLocal = "http://localhost:5000/api";
const baseUrl = "https://blogmanagement-ce2e.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: baseUrlLocal,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;