import React from 'react';

export type SkillNameAction = { type: 'set' | 'reset', name: string | null; };
export type SkillNameState = { name: string | null; };
export type SkillNameDispatch = (action: SkillNameAction) => void;
export type SkillNameContextType = { state: SkillNameState; dispatch: SkillNameDispatch; };

export const SkillNameContext = React.createContext<{
  state: SkillNameState,
  dispatch: SkillNameDispatch;
} | undefined>(undefined);
