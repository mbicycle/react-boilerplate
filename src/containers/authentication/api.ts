import { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from 'common/axios';
import { GoogleLoginResponse } from 'react-google-login';

import { Endpoint } from './utils/constants';
import { storage } from './utils/storage';
import { TokenType } from './types/TokenType';

const axios = axiosInstance;

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  role: string;
  skype: string;
  summaryOfQualifications: string;
}

export async function handleApiResponse(response: AxiosResponse): Promise<unknown> {
  if (response.status === 200) {
    return response.data;
  }

  return Promise.reject(response);
}

export const loginWithGoogleTokenId = async ({ tokenId }: GoogleLoginResponse):
  Promise<TokenType> => new Promise<TokenType>(
    (resolve, reject) => {
      axios.post<TokenType>(Endpoint.AuthToken, {
        token: tokenId,
      }).then((response: AxiosResponse<TokenType>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    },
  );

export const getUser = async (): Promise<User> => new Promise<User>(
  (resolve, reject) => {
    axios.get<User>(Endpoint.Me)
      .then((response: AxiosResponse<User>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);

export const relogin = async ():
  Promise<TokenType> => new Promise<TokenType>(
    (resolve, reject) => {
      const refreshToken = storage.getRefreshToken();

      axios.post<TokenType>(Endpoint.Refresh, {}, {
        headers: {
          'Refresh-Token': refreshToken as string,
        },
      }).then((response: AxiosResponse<TokenType>) => {
        if (response?.status === 201) {
          storage.setToken(response.data);
        }
        return resolve(response.data);
      })
        .catch((error: AxiosError<string>) => reject(error));
    },
  );
