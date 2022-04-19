import { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from 'common/interceptors/axios';

import { Skill } from 'common/models/User';

import { Endpoint } from './constants';

const axios = axiosInstance;

export const getMySkills = async (): Promise<Skill[]> => new Promise<Skill[]>((resolve, reject) => {
  axios.get<Skill[]>(Endpoint.GetMySkills)
    .then((response: AxiosResponse<Skill[]>) => resolve(response.data))
    .catch((error: AxiosError<string>) => reject(error));
});

export const putSkill = async (data: Skill): Promise<Skill> => new Promise<Skill>((resolve, reject) => {
  axios.post<Skill>(Endpoint.PutSkill, data)
    .then((response: AxiosResponse<Skill>) => resolve(response.data))
    .catch((error: AxiosError<string>) => reject(error));
});

export const getSkillBy = async (id: string): Promise<Skill> => new Promise<Skill>((resolve, reject) => {
  axios.get<Skill>(`${Endpoint.GetSkillById}/${id}`)
    .then((response: AxiosResponse<Skill>) => resolve(response.data))
    .catch((error: AxiosError<string>) => reject(error));
});
