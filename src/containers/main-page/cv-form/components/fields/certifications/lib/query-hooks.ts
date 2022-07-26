import { useMutation, UseMutationResult, useQueryClient } from 'react-query';

import { Certificate, DbUser } from '../../../../../../../common/models/User';
import { useUserFromDb } from '../../personal-information/lib/query-hooks';
import * as api from './api';
import { QueryKey } from './query-key';
import SnackBarUtils from '../../../../../../../common/components/SnackBar/SnackBarUtils';

export function useAddUserCertificate(): UseMutationResult<DbUser, Error, Certificate, VoidFunction> {
  const queryClient = useQueryClient();
  const { data: user } = useUserFromDb();

  const certificates = user?.certificates || [];

  return useMutation<DbUser, Error, Certificate, VoidFunction>(
    (certificate: Certificate) => {
      certificates.push(certificate as Certificate);

      return api.modifyUserCertificates(certificates as Certificate[], user as DbUser);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.DbUser);
      },
      onError: (error: Error, _: Certificate, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}

export function useDeleteUserCertificate(): UseMutationResult<DbUser, Error, string, unknown> {
  const queryClient = useQueryClient();
  const { data: user } = useUserFromDb();
  return useMutation<DbUser, Error, string, VoidFunction>(
    (name: string) => {
      const certificates = user?.certificates;
      const filteredCertificates = (
        certificates?.filter((certificate: Certificate) => certificate.name !== name)
      );

      return api.modifyUserCertificates(filteredCertificates as Certificate[], user as DbUser);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.DbUser);
      },
      onError: (error: Error, _: string, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}

export function useDeleteUserCertificateAll(): UseMutationResult<DbUser, Error, string, unknown> {
  const queryClient = useQueryClient();
  const { data: user } = useUserFromDb();
  return useMutation<DbUser, Error, string, VoidFunction>(
    () => {
      const filteredCertificates: any[] = [];
      return api.modifyUserCertificates(filteredCertificates as Certificate[], user as DbUser);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.DbUser);
      },
      onError: (error: Error, _: string, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}
