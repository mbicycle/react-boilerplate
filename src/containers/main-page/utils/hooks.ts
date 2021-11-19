import { useState } from 'react';
import { UseQueryResult } from 'react-query';

import { QueryKey } from 'common/constants/query-keys';
import { useListPokemons } from '../lib/query-hooks';
import { NamedAPIResourceList } from '../models/resource';

type UsePokemonsReturnType = [(() => void), UseQueryResult<NamedAPIResourceList, Error> | undefined];
const NEXT = 10 as const;

export const usePokemons = (): UsePokemonsReturnType => {
  const [limit, setLimit] = useState<{ offset: number, limit: number; }>({ offset: 0, limit: 10 });

  const query = useListPokemons(limit.offset, limit.limit);

  const incrementPokes = (): void => {
    setLimit((prev) => ({
      limit: prev.limit + NEXT,
      offset: prev.offset + 0, // Field for decrementation
    }));

    query.refetch({
      queryKey: [
        QueryKey.Abilities,
        {
          offset: limit.offset,
          limit: limit.limit,
        },
      ],
    });
  };

  return [incrementPokes, query];
};
