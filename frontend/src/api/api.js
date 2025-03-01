// src/api.js
import axios from 'axios';

// For Vite, use import.meta.env to access environment variables
const BASE_URL = import.meta.env.VITE_API_BASE_URL_PROD;

// Create an Axios instance with the backend API base URL
const api = axios.create({
  baseURL: `${BASE_URL}/api` // All your endpoints will be prefixed with this
});

export default api;
