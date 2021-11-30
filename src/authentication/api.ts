import { AxiosResponse } from 'axios';
import axiosInstance from 'common/axios';
import { GoogleLoginResponse } from 'react-google-login';
import { storage } from './utils/storage';

const axios = axiosInstance;

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  role: string;
}

export async function handleApiResponse(response: AxiosResponse): Promise<unknown> {
  if (response.status === 200) {
    return response.data;
  }

  return Promise.reject(response);
}

export async function getUserProfile(): Promise<User> {
  return axios.get('/userinfo')
    .then(handleApiResponse as (response: AxiosResponse) => Promise<User>);
}

export async function loginWithGoogleTokenId(data: GoogleLoginResponse): Promise<void> {
  const response = await axios.post('/authentication/token', {
    googleIdToken: data.tokenId,
  });

  if ('authorization' in response.headers) {
    storage.setToken(response.headers.authorization);
  }
}
