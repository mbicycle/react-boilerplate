import { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from 'common/interceptors/axios';

import { Me } from 'common/models/Me';

import { Endpoint } from './constants';

const axios = axiosInstance;

export const updateMe = async (user: Me): Promise<Me> => new Promise<Me>((resolve, reject) => {
  axios.put<Me>(`${Endpoint.UpdateMe}`, user)
    .then((response: AxiosResponse<Me>) => resolve(response.data))
    .catch((error: AxiosError<string>) => reject(error));
});
