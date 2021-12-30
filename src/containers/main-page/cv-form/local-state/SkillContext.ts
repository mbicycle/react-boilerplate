import React from 'react';
import { SkillModel, Tool } from '../components/fields/skills/utils/models';

export type SkillType = SkillModel;

export type SkillAction = {
  type: 'add-category' | 'remove-category' | 'add-tool' | 'remove-tool' | 'update-tools',
  skill?: Partial<SkillType>;
  newTools?: Tool[];
};
export type SkillState = Partial<SkillType>;
export type SkillDispatch = (action: SkillAction) => void;
export type SkillContextType = { state: SkillState; dispatch: SkillDispatch; };

export const SkillContext = React.createContext<{
  state: SkillState,
  dispatch: SkillDispatch;
} | undefined>(undefined);
