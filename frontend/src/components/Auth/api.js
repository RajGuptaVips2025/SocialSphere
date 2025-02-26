import axios from 'axios';

const api = axios.create ({
    baseURL: 'https://instagram-backend-qqjd.onrender.com/api/auth'
})

export const googleAuth = (code) => api.post(`/google?code=${code}`);
