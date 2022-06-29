import React from 'react';

export type CategoryNameAction = { type: 'set' | 'reset', id: string | null; };
export type CategoryNameState = { id: string | null; };
export type CategoryNameDispatch = (action: CategoryNameAction) => void;
export type CategoryNameContextType = { state: CategoryNameState; dispatch: CategoryNameDispatch; };

export const CategoryByIdContext = React.createContext<{
  state: CategoryNameState,
  dispatch: CategoryNameDispatch;
} | undefined>(undefined);
