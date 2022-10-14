import axios from 'axios';

import { storage } from 'containers/authentication/utils/storage';
import account from './ms-graph-interceptor';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.response.use(async (response) => {
  const token = storage.getIdToken();

  if (token && response.headers) {
    response.headers.Authorization = `Bearer ${token}`;
  } else if (response.status > 400) {
    account.setActiveAccount();
  }

  return response;
}, (error) => Promise.reject(error));

axiosInstance.interceptors.request.use(async (request) => {
  const token = storage.getIdToken();

  if (token && request.headers) {
    request.headers.Authorization = `Bearer ${token}`;
    request.headers['Content-Type'] = 'application/json';
  }
  account.setActiveAccount();

  return request;
}, (error) => Promise.reject(error));

export default axiosInstance;
