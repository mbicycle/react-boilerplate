import React from 'react';

import type { Category, Skill, Tool } from 'common/models/User';

export const enum CategoryActionOperationType {
  AddCategory = 'add-category',
  AddSkill = 'add-skill',
  AddTool = 'add-tool',
  RemoveTool = 'remove-tool',
  UpdataTools = 'update-tools',
  UpdateTool = 'update-tool',
  ResetSkill = 'reset-skill',
  SetEditSkill = 'set-edit-skill',
}

export type CategoryAction = {
  type: `${CategoryActionOperationType}`,
  category?: Category;
  skill?: Skill;
  tools?: Tool[];
  tool?: Tool;
};
export type CategoryState = Partial<Skill>;
export type CategoryDispatch = (action: CategoryAction) => void;
export type SkillContextType = { state: CategoryState; dispatch: CategoryDispatch; };

export const CategoryContext = React.createContext<{
  state: CategoryState,
  dispatch: CategoryDispatch;
} | undefined>(undefined);
