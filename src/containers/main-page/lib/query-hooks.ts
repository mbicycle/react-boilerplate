import { QueryKey } from 'common/constants/query-keys';
import {
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';
import { usePokeDetails } from '../local-state/hooks';
import { Pokemon } from '../models/pokemon';
import { NamedAPIResourceList } from '../models/resource';

import * as api from './api';

export function useListPokemons(offset: number, limit: number): UseQueryResult<NamedAPIResourceList, Error> {
  const queryClient = useQueryClient();

  return useQuery(
    [QueryKey.Abilities, offset, limit],
    () => api.listPokemons(offset, limit),
    {
      retry: 2,
      keepPreviousData: true, // Have to be used with pagination.
      initialData: () => queryClient.getQueryData(QueryKey.Abilities),

      // onError: (error: Error) => {
      //   // Handle error
      // },
    },
  );
}

export function usePokemonDetails(): UseQueryResult<Pokemon, Error> {
  const { state } = usePokeDetails();

  return useQuery(
    [QueryKey.Details, state.url],
    () => api.getPokemonBy(state.url as string),
    {
      retry: 2,
      keepPreviousData: true,
      refetchOnWindowFocus: false,

      // onError: (error: Error) => {
      //   // Handle error
      // },
    },
  );
}
