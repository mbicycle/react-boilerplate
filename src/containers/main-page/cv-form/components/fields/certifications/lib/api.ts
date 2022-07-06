import { AxiosError, AxiosResponse } from 'axios';
import { Certificate, DbUser } from '../../../../../../../common/models/User';
import axiosInstance from '../../../../../../../common/interceptors/axios';

const axios = axiosInstance;

export const modifyUserCertificates = async (
  certificates: Certificate[],
  user: DbUser,
): Promise<DbUser> => new Promise<DbUser>(
  (resolve, reject) => {
    axios.put<DbUser>(`employee/${user.email}`, { ...user, certificates })
      .then((response: AxiosResponse<DbUser>) => resolve(response.data))
      .catch((error: AxiosError<string>) => reject(error));
  },
);