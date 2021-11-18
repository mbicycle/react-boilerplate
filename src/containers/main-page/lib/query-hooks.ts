import { QueryKey } from 'common/constants/query-keys';
import {
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';
import { NamedAPIResourceList } from '../models/resource';

import * as api from './api';

export function useListPokemons(offset: number, limit: number): UseQueryResult<NamedAPIResourceList, Error> {
  const queryClient = useQueryClient();

  return useQuery(
    [QueryKey.abilities, offset, limit],
    () => api.listPokemons(offset, limit),
    {
      retry: 2,
      keepPreviousData: true, // Have to be used with pagination.
      initialData: () => queryClient.getQueryData(QueryKey.abilities),

      // onError: (error: Error) => {
      //   // Handle error
      // },
    },
  );
}
