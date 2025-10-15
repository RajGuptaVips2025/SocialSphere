// src/api.js
import axios from 'axios';

const BASE_URL =
  import.meta.env.VITE_NODE_ENV === "development"
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  withCredentials: true 
});

export default api;
