import React from 'react';
import { SkillModel } from '../components/fields/skills/utils/models';

export type SkillModelType = SkillModel;

export type SkillCollectionAction = {
  type: 'add' | 'remove',
  skill: Partial<SkillModelType>;
};
export type SkillCollectionState = SkillModelType[];
export type SkillCollectionDispatch = (action: SkillCollectionAction) => void;
export type SkillCollectionContextType = { state: SkillCollectionState; dispatch: SkillCollectionDispatch; };

export const SkillCollectionContext = React.createContext<{
  state: SkillCollectionState,
  dispatch: SkillCollectionDispatch;
} | undefined>(undefined);
