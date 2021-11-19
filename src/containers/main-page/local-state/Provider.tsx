/* eslint-disable max-len */
import { memo, useMemo, useReducer } from 'react';
import { pokeDetailsReducer } from './reducers';
import { PokeDetailsContext } from './SortByNameContext';

interface ProviderProps{
  children: React.ReactNode;
}

const Provider = function ({ children }: ProviderProps):JSX.Element {
  const [setSortingFieldNameState, setSortingFieldNameDispatch] = useReducer(pokeDetailsReducer, {
    url: null,
  });

  const pokeDetailsInitial = useMemo(() => ({
    state: setSortingFieldNameState,
    dispatch: setSortingFieldNameDispatch,
  }), [setSortingFieldNameState]);

  return (
    <PokeDetailsContext.Provider value={pokeDetailsInitial}>
      {children}
    </PokeDetailsContext.Provider>
  );
};

export default memo(Provider);
