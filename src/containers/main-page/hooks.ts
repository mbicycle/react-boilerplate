import { QueryKey } from 'common/constants/query-keys';
import { useState } from 'react';
import { useListPokemons } from './lib/query-hooks';
import { NamedAPIResourceList } from './models/resource';

type UsePokemonsReturnType = ((() => void) | NamedAPIResourceList | undefined)[];
const NEXT = 10 as const;

export const usePokemons = (): UsePokemonsReturnType => {
  const [limit, setLimit] = useState<{ offset: number, limit: number; }>({ offset: 0, limit: 10 });

  const query = useListPokemons(limit.offset, limit.limit);

  const handleClick = (): void => {
    setLimit((prev) => ({
      limit: prev.limit + NEXT,
      offset: prev.offset + 0,
    }));

    query.refetch({
      queryKey: [
        QueryKey.abilities,
        {
          offset: limit.offset,
          limit: limit.limit,
        },
      ],
    });
  };

  return [handleClick, query.data];
};
