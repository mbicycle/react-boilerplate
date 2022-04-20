import { useNavigate } from 'react-router-dom';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';

import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import { ROUTE } from 'common/components/routes/utils/constants';

import { DbUser } from 'common/models/User';
import { useAuth } from 'containers/authentication/auth';
import { QueryKey } from './query-key';

import * as api from './api';
import { CreateUserModel } from './types';

export function useUserFromDb(): UseQueryResult<DbUser, Error> {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const navigate = useNavigate();

  return useQuery<DbUser, Error, DbUser, QueryKey.DbUser>(
    QueryKey.DbUser,
    () => api.getDbUser(user?.mail as string),
    {
      initialData: () => queryClient.getQueryData(QueryKey.DbUser),
      onSuccess: async (data) => {
        const cachedUser = await queryClient.getQueryData(QueryKey.DbUser) as DbUser;

        if (!data || !cachedUser.email) {
          navigate({ pathname: ROUTE.LOGIN }, { replace: true });
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

export function useUpdateUserFromDb(): UseMutationResult<DbUser, Error, DbUser, unknown> {
  const queryClient = useQueryClient();

  return useMutation<DbUser, Error, DbUser, VoidFunction>(
    (user: DbUser) => api.updateDbUser(user),
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.User);
      },
      onError: (error: Error, _: DbUser, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}

export function useCreateDbUser(): UseMutationResult<CreateUserModel, Error, CreateUserModel, unknown> {
  const queryClient = useQueryClient();

  return useMutation<CreateUserModel, Error, CreateUserModel, VoidFunction>(
    (user) => api.createDbUser(user),
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.DbUser);
      },
      onSuccess: () => queryClient.invalidateQueries(QueryKey.DbUser),
      onError: (error: Error, _: CreateUserModel, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}

export function useUpdateMsAvatar(): UseMutationResult<ReadableStream, Error, File, unknown> {
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
