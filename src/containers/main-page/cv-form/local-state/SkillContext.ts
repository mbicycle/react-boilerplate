import type { Tool } from 'common/models/User';
import React from 'react';
import { SkillModel } from '../components/fields/skills/utils/models';

export type SkillType = SkillModel;

export const enum SkillActionOperationType {
  AddCategory = 'add-category',
  RemoveCategory = 'remove-category',
  AddTool = 'add-tool',
  RemoveTool = 'remove-tool',
  UpdataTools = 'update-tools',
  UpdateTool = 'update-tool',
}

export type SkillAction = {
  type: `${SkillActionOperationType}`,
  skill?: Partial<SkillType>;
  tool?: Tool;
  tools?: Tool[];
};
export type SkillState = Partial<SkillType>;
export type SkillDispatch = (action: SkillAction) => void;
export type SkillContextType = { state: SkillState; dispatch: SkillDispatch; };

export const SkillContext = React.createContext<{
  state: SkillState,
  dispatch: SkillDispatch;
} | undefined>(undefined);
