import { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from 'common/axios';
import { GoogleLoginResponse } from 'react-google-login';

import { Endpoint } from './utils/constants';
import { TokenType } from './utils/types';

const axios = axiosInstance;

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export async function handleApiResponse(response: AxiosResponse): Promise<unknown> {
  if (response.status === 200) {
    return response.data;
  }

  return Promise.reject(response);
}

export const loginWithGoogleTokenId = async (data: GoogleLoginResponse):
  Promise<TokenType> => new Promise<TokenType>(
    (resolve, reject) => {
      axios.post<TokenType>(Endpoint.AuthToken, {
        token: data.tokenId,
      }).then((response: AxiosResponse<TokenType>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    },
  );
