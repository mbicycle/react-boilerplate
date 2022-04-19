/* eslint-disable max-len */
import { AxiosError, AxiosResponse } from 'axios';

import axiosInstance from 'common/interceptors/axios';
import type { Language } from 'common/models/User';

import { FormLanguage } from '../components/utils/types';
import { Endpoint } from './constants';

const axios = axiosInstance;

export const cretateLanguage = async (language: Language): Promise<Language> => new Promise<Language>(
  (resolve, reject) => {
    axios.post<Language>(`${Endpoint.PostLanguage}`, language)
      .then((response: AxiosResponse<Language>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);

export const getAllLanguages = async (): Promise<Language[]> => new Promise<Language[]>(
  (resolve, reject) => {
    axios.get<Language[]>(Endpoint.AllLanguages)
      .then((response: AxiosResponse<Language[]>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);

export const getUserLanguages = async (): Promise<Language[]> => new Promise<Language[]>(
  (resolve, reject) => {
    axios.get<Language[]>(Endpoint.AllLanguages)
      .then((response: AxiosResponse<Language[]>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);

export const addUserLanguage = async (language: FormLanguage): Promise<FormLanguage> => new Promise<FormLanguage>(
  (resolve, reject) => {
    axios.put<FormLanguage>(`${Endpoint.AddUserLanguage}`, language)
      .then((response: AxiosResponse<FormLanguage>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);

export const deleteUserLanguage = async (id: string): Promise<Language> => new Promise<Language>(
  (resolve, reject) => {
    axios.delete<Language>(`${Endpoint.DeleteUserLanguage}/${id}`)
      .then((response: AxiosResponse<Language>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);
