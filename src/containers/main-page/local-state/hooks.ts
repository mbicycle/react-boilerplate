import { useContext } from 'react';

import {
  PokeDetailsContext,
  PokeDetailsDispatch,
  PokeDetailsState,
} from './SortByNameContext';

const usePokeDetails = (): {
  state: PokeDetailsState,
  dispatch: PokeDetailsDispatch,
} => {
  const context = useContext(PokeDetailsContext);
  if (context === undefined) {
    throw new Error('usePokeDetails must be used within a Provider');
  }

  return context;
};

export {
  usePokeDetails,
};
