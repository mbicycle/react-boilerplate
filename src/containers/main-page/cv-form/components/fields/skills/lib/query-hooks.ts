import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from 'react-query';
import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import { DbUser } from 'common/models/User';

import { QueryKey } from './query-key';

import * as api from './api';

export function useAddOrEditSkill(): UseMutationResult<DbUser, Error, DbUser, unknown> {
  const queryClient = useQueryClient();

  return useMutation<DbUser, Error, DbUser, VoidFunction>(
    (data) => api.updateDbUserCategory(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QueryKey.User);
      },
      onError: (error: Error) => {
        SnackBarUtils.error(`${error.message}.`);
      },
    },
  );
}
