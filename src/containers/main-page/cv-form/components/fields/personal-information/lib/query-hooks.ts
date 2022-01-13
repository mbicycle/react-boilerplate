import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from 'react-query';
import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import { Me } from 'common/models/Me';

import { QueryKey } from './query-key';

import * as api from './api';

export function useUpdateMe(): UseMutationResult<Me, Error, string, unknown> {
  const queryClient = useQueryClient();

  return useMutation<Me, Error, string, VoidFunction>(
    (user: Me | unknown) => api.updateMe(user as Me),
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

export function useUpdateMyAvatar(): UseMutationResult<Me, Error, string, unknown> {
  const queryClient = useQueryClient();
  const cachedUser = queryClient.getQueryData(QueryKey.User) as Me;

  return useMutation<Me, Error, string, VoidFunction>(
    (base64Avatar: string) => api.updateMe({ ...cachedUser, picture: base64Avatar }),
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
