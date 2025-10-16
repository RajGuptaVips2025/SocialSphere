import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const api = axios.create({
  baseURL: `${BASE_URL}/api/auth`,
  withCredentials: true,
});

export const googleAuth = (code) => api.post(`/google?code=${encodeURIComponent(code)}`);

