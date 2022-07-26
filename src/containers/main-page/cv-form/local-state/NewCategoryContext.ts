import React from 'react';

import type { Category, Skill, Tool } from 'common/models/User';

export const enum NewCategoryActionOperationType {
  SetCategory = 'set-category',
  ResetCategory = 'reset-category',

  UpdateCategoryName = 'update-category-name',
  AddCategory = 'add-skill',

  RemoveSkill = 'remove-skill',
  UpdateSkillName = 'update-skill-name',

  AddTool = 'add-tool',
  UpdateTool = 'update-tool',
  RemoveTool = 'remove-tool',
}

export type NewCategoryAction = {
  type: `${NewCategoryActionOperationType}`,

  category?: Category;
  // categoryId?: string;
  categoryName?: string;

  tool?: Tool;

  skill?: Skill;
  skillId?: string;
  skillName?: string;
};
export type NewCategoryState = Partial<Category>;
export type NewCategoryDispatch = (action: NewCategoryAction) => void;
export type NewSkillContextType = { state: NewCategoryState; dispatch: NewCategoryDispatch; };

export const NewCategoryContext = React.createContext<{
  state: NewCategoryState,
  dispatch: NewCategoryDispatch;
} | undefined>(undefined);
