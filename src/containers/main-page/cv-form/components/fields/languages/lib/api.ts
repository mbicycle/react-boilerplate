import { AxiosError, AxiosResponse } from 'axios';

import axiosInstance from 'common/interceptors/axios';
import { Languages } from 'common/models/Language.model';
import type { DbUser, UserLanguage } from 'common/models/User';

import { Endpoint } from './constants';

const axios = axiosInstance;

export const getAllLanguages = async (): Promise<Languages> => new Promise<Languages>(
  (resolve, reject) => {
    axios.get<Languages>(Endpoint.AllLanguages)
      .then((response: AxiosResponse<Languages>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);

export const modifyUserLanguages = async (
  languages: UserLanguage[],
  user: DbUser,
): Promise<DbUser> => new Promise<DbUser>(
  (resolve, reject) => {
    axios.put<DbUser>(`employee/${user.email}`, { ...user, languages })
      .then((response: AxiosResponse<DbUser>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);
