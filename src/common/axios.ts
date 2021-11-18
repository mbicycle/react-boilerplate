import { REACT_APP_API_URL } from 'as.env';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: REACT_APP_API_URL,
});

export default axiosInstance;
