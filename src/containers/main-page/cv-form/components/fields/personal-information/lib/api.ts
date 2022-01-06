import { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from 'common/axios';

import { Endpoints } from './constants';
import { Me } from './models/me';

const axios = axiosInstance;

export const changeMe = async (user: Me): Promise<Me> => new Promise<Me>((resolve, reject) => {
  axios.put<Me>(`${Endpoints.ChangeMe}`, user)
    .then((response: AxiosResponse<Me>) => resolve(response.data))
    .catch((error: AxiosError<string>) => reject(error));
});
