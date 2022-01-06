import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from 'react-query';
import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import { QueryKey } from './query-key';

import * as api from './api';
import { Me } from './models/me';

export function useChangeMe(): UseMutationResult<Me, Error, string, unknown> {
  const queryClient = useQueryClient();

  return useMutation<Me, Error, string, VoidFunction>(
    (user: Me | unknown) => api.changeMe(user as Me),
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

export function useChangeMyAvatar(): UseMutationResult<Me, Error, string, unknown> {
  const queryClient = useQueryClient();
  const cachedUser = queryClient.getQueryData(QueryKey.User) as Me;

  return useMutation<Me, Error, string, VoidFunction>(
    (base64Avatar: string) => api.changeMe({ ...cachedUser, picture: base64Avatar }),
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
