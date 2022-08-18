import { AxiosError, AxiosResponse } from 'axios';

import axiosInstance from 'common/interceptors/axios';
import { Project, DbUser } from 'common/models/User';

const axios = axiosInstance;

export const updateUserProjects = async (
  projects: Project[],
  user: DbUser,
): Promise<DbUser> => new Promise<DbUser>(
  (resolve, reject) => {
    axios.put<DbUser>(`employee/${user.email}`, { ...user, projects })
      .then((response: AxiosResponse<DbUser>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);