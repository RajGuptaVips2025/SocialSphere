import axios from 'axios';

const api = axios.create ({
    baseURL: 'https://instagram-backend-lxea.onrender.com/api/auth'
})

export const googleAuth = (code) => api.post(`/google?code=${code}`);
