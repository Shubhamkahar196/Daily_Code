import axios from 'axios';

const API_BASE_URL = import.meta.env.PROD
  ? '/api'  // In production, use relative URL (same domain)
  : 'http://localhost:8000/api';  // In development, use localhost

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (email, password) => api.post('/auth/register', { email, password }),
  login: (email, password) => api.post('/auth/login', { email, password }),
  getMe: () => api.get('/auth/me'),
};

// File API
export const fileAPI = {
  upload: (formData) => api.post('/files/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
  getUserFiles: () => api.get('/files/my-files'),
  deleteFile: (id) => api.delete(`/files/${id}`),
};

// View API
export const viewAPI = {
  getFileInfo: (shareLink) => axios.get(`${API_BASE_URL}/view/${shareLink}`),
  accessFile: (shareLink, password = '') => axios.post(`${API_BASE_URL}/view/${shareLink}/access`, { password }, {
    responseType: 'blob',
  }),
};

export default api;
