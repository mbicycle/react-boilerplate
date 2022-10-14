import { useQuery, useQueryClient, UseQueryResult } from 'react-query';
import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import { QueryKey } from './query-key';

import * as api from './api';

export function useGetUserPhoto(): UseQueryResult<Blob, Error> {
  const queryClient = useQueryClient();

  return useQuery<Blob, Error, Blob, QueryKey.UserPhoto>(
    QueryKey.UserPhoto,
    api.getUserPhoto,
    {
      initialData: () => queryClient.getQueryData(QueryKey.UserPhoto),
      onSuccess: (data) => queryClient.setQueryData(QueryKey.UserPhoto, data),

      onError: (error: Error) => {
        SnackBarUtils.error(`${error.message}.`);
      },
    },
  );
}
