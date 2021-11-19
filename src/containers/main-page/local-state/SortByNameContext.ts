import { createContext } from 'react';

export type PokeDetailsAction = { url: string | null; };

export type PokeDetailsDispatch = (action: PokeDetailsAction) => void;

export type PokeDetailsState = { url: string | null; };

export const PokeDetailsContext = createContext<
  { state: PokeDetailsState; dispatch: PokeDetailsDispatch; } | undefined
>(undefined);

createContext<(PokeDetailsState & PokeDetailsDispatch) | undefined>(undefined);
