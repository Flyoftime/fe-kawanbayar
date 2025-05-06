// lib/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Tambahkan interceptor untuk menyisipkan token
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // atau gunakan cookie jika pakai SSR
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
