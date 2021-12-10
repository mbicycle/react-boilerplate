import { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from 'common/axios';
import { GoogleLoginResponse } from 'react-google-login';

import { Endpoint, AUTH_HEADER } from './utils/constants';
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

export const getUserProfile = async (): Promise<User> => new Promise<User>((resolve, reject) => {
  axiosInstance.get<User>(Endpoint.UserInfo)
    .then((response: AxiosResponse<User>) => resolve(response.data))
    .catch((error: AxiosError<string>) => {
      // FIXME: Great crutch❗
      storage.clearToken();
      return reject(error);
    });
});

export async function loginWithGoogleTokenId(data: GoogleLoginResponse): Promise<void> {
  const response = await axios.post(Endpoint.AuthToken, {
    googleIdToken: data.tokenId,
  });

  if (AUTH_HEADER in response.headers) {
    storage.setToken(response.headers.authorization);
  }
}
