import { AxiosError, AxiosResponse } from 'axios';

import axiosInstance from 'common/interceptors/axios';
import { MsUser } from 'common/models/User';
import graph from 'common/interceptors/ms-graph-interceptor';

import { Endpoint } from './utils/constants';
import { storage } from './utils/storage';
import { TokenType } from './types/TokenType';

const axios = axiosInstance;

export async function handleApiResponse(response: AxiosResponse): Promise<unknown> {
  if (response.status === 200) {
    return response.data;
  }

  return Promise.reject(response);
}

export const getUser = async (): Promise<MsUser> => new Promise<MsUser>(
  (resolve, reject) => {
    graph.graphClient.api('/me')
      .select('givenName,mail,surname')
      .get()
      .then((response: MsUser) => resolve(response))
      .catch((error) => reject(error));
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
          storage.clearAll();
        }
        return resolve(response.data);
      })
        .catch((error: AxiosError<string>) => reject(error));
    },
  );
