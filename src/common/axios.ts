import axios from 'axios';

import { storage } from 'containers/authentication/utils/storage';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.response.use(async (response) => {
  const token = storage.getToken();

  if (token && response.headers) {
    response.headers.Authorization = `Bearer ${token}`;
  }

  return response;
}, (error) => Promise.reject(error));

axiosInstance.interceptors.request.use(async (request) => {
  const token = storage.getToken();

  if (token && request.headers) {
    request.headers.Authorization = `Bearer ${token}`;
    request.headers['Content-Type'] = 'application/json';
  }

  return request;
}, (error) => Promise.reject(error));

export default axiosInstance;
