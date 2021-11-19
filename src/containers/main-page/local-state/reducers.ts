import { PokeDetailsAction, PokeDetailsState } from './SortByNameContext';

function pokeDetailsReducer(state: PokeDetailsState, action: PokeDetailsAction): PokeDetailsState {
  let copy = { ...state };

  copy = {
    url: action.url,
  };

  return copy;
}

export {
  pokeDetailsReducer,
};
