 import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl =
  // process.env.BASE_URL || "https://cure-track-client.vercel.app/api";
  process.env.BASE_URL || "http://localhost:5001/api";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;
