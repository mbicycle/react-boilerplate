import { AxiosError, AxiosResponse } from 'axios';

import axiosInstance from 'common/interceptors/axios';
import graph from 'common/interceptors/ms-graph-interceptor';

import { DbUser } from 'common/models/User';
import { CreateUserModel } from './types';

const axios = axiosInstance;

export const updateDbUser = async (
  user: DbUser,
): Promise<DbUser> => new Promise<DbUser>((resolve, reject) => {
  axios.put<DbUser>(`employee/${user.email}`, user)
    .then((response: AxiosResponse<DbUser>) => resolve(response.data))
    .catch((error: AxiosError<string>) => reject(error));
});

export const getDbUser = async (email: string): Promise<DbUser> => new Promise<DbUser>(
  (resolve, reject) => {
    axios.get<DbUser>(`employee/${email}`)
      .then((response: AxiosResponse<DbUser>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);

export const createDbUser = async (
  user: CreateUserModel,
): Promise<CreateUserModel> => new Promise<CreateUserModel>(
  (resolve, reject) => {
    axios.post<DbUser>('employee', user)
      .then((response: AxiosResponse<CreateUserModel>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);

export const updateMsUserAvatar = async (file: File): Promise<ReadableStream> => new Promise<ReadableStream>(
  (resolve, reject) => {
    graph.graphClient.api('/me/photo/$value').put(file)
      .then((response: ReadableStream) => resolve(response))
      .catch((error) => reject(error));
  },
);
