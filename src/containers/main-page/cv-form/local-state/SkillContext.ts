import React from 'react';

import type { Skill, Tool } from 'common/models/User';

export type SkillType = Skill;

export const enum SkillActionOperationType {
  AddCategory = 'add-category',
  AddTool = 'add-tool',
  RemoveTool = 'remove-tool',
  UpdataTools = 'update-tools',
  UpdateTool = 'update-tool',
  ResetSkill = 'reset-skill',
  SetEditSkill = 'set-edit-skill',
}

export type SkillAction = {
  type: `${SkillActionOperationType}`,
  skill?: SkillType;
  tools?: Tool[];
  tool?: Tool;
};
export type SkillState = Partial<SkillType>;
export type SkillDispatch = (action: SkillAction) => void;
export type SkillContextType = { state: SkillState; dispatch: SkillDispatch; };

export const SkillContext = React.createContext<{
  state: SkillState,
  dispatch: SkillDispatch;
} | undefined>(undefined);
