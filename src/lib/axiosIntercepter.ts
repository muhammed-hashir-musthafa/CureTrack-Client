import { getCookie } from "cookies-next";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl =
  process.env.BASE_URL || "https://cure-track-client.vercel.app/api";

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getCookie("token");

    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      const refreshToken = getCookie("refresh_token");

      if (refreshToken) {
        try {
          await api.post("/refresh-token");
          return api(error.config);
        } catch (refreshError) {
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie =
            "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          window.location.href = "/login";
        }
      } else {
        window.location.href = "/login";
      }
    } else if (status === 403) {
      console.error(
        "Access forbidden: You don't have the necessary permissions"
      );
    } else if (status === 500) {
      console.error("Server error: Something went wrong");
    }

    return Promise.reject(error);
  }
);

export default api;
