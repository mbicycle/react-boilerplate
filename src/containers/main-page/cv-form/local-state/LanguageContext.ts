import React from 'react';

export type LeveledLanguageType = { language: string; level: string; };

export type LanguageAction = {
  type: 'add' | 'remove',
  leveledLanguage: LeveledLanguageType;
};
export type LanguageState = LeveledLanguageType[];
export type LanguageDispatch = (action: LanguageAction) => void;
export type LanguageContextType = { state: LanguageState; dispatch: LanguageDispatch; };

export const LanguageContext = React.createContext<{
  state: LanguageState,
  dispatch: LanguageDispatch;
} | undefined>(undefined);
