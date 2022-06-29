import { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from 'common/interceptors/axios';

import { DbUser } from 'common/models/User';

const axios = axiosInstance;

export const updateDbUserCategory = async (
  data: DbUser,
): Promise<DbUser> => new Promise<DbUser>((resolve, reject) => {
  axios.put<DbUser>(`employee/${data.email}`, data)
    .then((response: AxiosResponse<DbUser>) => resolve(response.data))
    .catch((error: AxiosError<string>) => reject(error));
});
