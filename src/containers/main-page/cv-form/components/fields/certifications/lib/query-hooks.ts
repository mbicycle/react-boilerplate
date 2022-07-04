import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import { Certificate, DbUser, UserLanguage } from '../../../../../../../common/models/User';
import { useUserFromDb } from '../../personal-information/lib/query-hooks';
import * as api from './api';
import { QueryKey } from '../../languages/lib/query-key';
import SnackBarUtils from '../../../../../../../common/components/SnackBar/SnackBarUtils';

export function useAddUserCertificate(): UseMutationResult<DbUser, Error, Certificate, VoidFunction> {
  const queryClient = useQueryClient();
  const { data: user } = useUserFromDb();
  const certificates = user?.certificates || [];
  return useMutation<DbUser, Error, Certificate, VoidFunction>(
    (certificate: Certificate) => {
      certificates?.push(certificate as Certificate);
      debugger;
      return api.modifyUserCertificates(certificates as Certificate[], user as DbUser);
    },
    // {
    //   onSettled: () => {
    //     queryClient.invalidateQueries(QueryKey.DbUser);
    //   },
    //   onError: (error: Error, _: UserLanguage, rollback) => {
    //     SnackBarUtils.error(error.message);
    //
    //     if (rollback) rollback();
    //   },
    // },
  );
}
