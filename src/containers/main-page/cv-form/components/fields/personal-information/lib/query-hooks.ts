import { useNavigate } from 'react-router-dom';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';

import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';

import { DbUser } from 'common/models/User';
import { useAuth } from 'containers/authentication/auth';
import { QueryKey } from './query-key';

import * as api from './api';

export function useUserFromDb(): UseQueryResult<DbUser, Error> {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const navigate = useNavigate();

  return useQuery<DbUser, Error, DbUser, QueryKey.DbUser>(
    QueryKey.DbUser,
    () => api.getDbUser(user?.mail as string),
    {
      initialData: () => queryClient.getQueryData(QueryKey.DbUser),
      onSuccess: (data) => {
        if (!data) {
          navigate({ pathname: '/login' }, { replace: true });
          SnackBarUtils.warning('User doesn\'t exist in Database.');
        }
      },

      onError: (error: Error) => {
        SnackBarUtils.error(`${error.message}.`);
      },
      notifyOnChangePropsExclusions: ['isFetching'],
      notifyOnChangeProps: ['data', 'error'],
      optimisticResults: true,
    },
  );
}

export function useUpdateUserFromDb(): UseMutationResult<DbUser, Error, string, unknown> {
  const queryClient = useQueryClient();

  return useMutation<DbUser, Error, string, VoidFunction>(
    (user: DbUser | unknown) => api.updateDbUser(user as DbUser),
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.User);
      },
      onError: (error: Error, _: string, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}

export function useUpdateMyAvatar(): UseMutationResult<ReadableStream, Error, File, unknown> {
  const queryClient = useQueryClient();

  return useMutation<ReadableStream, Error, File, VoidFunction>(
    (base64Avatar: File) => api.updateMsUserAvatar(base64Avatar as File),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKey.UserPhoto);
      },
      onError: (error: Error, _: File, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}
