// src/api.js
import axios from 'axios';

// This selects the correct API base URL depending on the environment
const BASE_URL =
  import.meta.env.VITE_NODE_ENV === "development"
    ? import.meta.env.VITE_API_BASE_URL_DEV
    : import.meta.env.VITE_API_BASE_URL_PROD;

console.log(BASE_URL)

// Create an Axios instance with the backend API base URL
const api = axios.create({
  baseURL: `${BASE_URL}/api` // All your endpoints will be prefixed with this
});

export default api;
