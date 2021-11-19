import { NamedAPIResource } from './models/resource';

import { usePokemons } from './utils/hooks';

import PokeCard from './PokeCard';
import Header from './Header';

import { PaperStyled } from './utils/styled';

export const MainPage = function ():JSX.Element {
  const [incrementPokes, query] = usePokemons();

  return (
    <>
      <Header
        loadMorePokes={incrementPokes}
        isFetching={query?.isFetching}
        count={query?.data?.results.length || 0}
      />
      <PaperStyled elevation={5}>
        {query?.data
         && (query.data.results as NamedAPIResource[])
           .map((val) => <PokeCard {...val} />)}
      </PaperStyled>
    </>
  );
};
