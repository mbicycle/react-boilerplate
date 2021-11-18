import { AxiosError, AxiosResponse } from 'axios';

import axiosInstance from 'common/axios';
import { Endpoints } from 'common/constants/endpoints';
import { NamedAPIResourceList } from '../models/resource';

export const listPokemons = async (
  offset?: number,
  limit?: number,
): Promise<NamedAPIResourceList> => new Promise<NamedAPIResourceList>((resolve, reject) => {
  axiosInstance.get<NamedAPIResourceList>(
    `${Endpoints.Pokemon}?offset=${offset || 0}&limit=${limit || 10}`,
  )
    .then((response: AxiosResponse<NamedAPIResourceList>) => resolve(response.data))
    .catch((error: AxiosError<string>) => reject(error));
});
