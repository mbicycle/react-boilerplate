import { Skill } from 'common/models/User';

import { CategoryNameAction, CategoryNameState } from './CategoryNameContext';
import { NewCategoryAction, NewCategoryState } from './NewCategoryContext';
import SkillManager from './SkillManager';
import ToolManager from './ToolManager';
import type { NewSkillReducerReturnType, ReturnPartialCategoryModelType } from './types';

export function newCategoryReducer(state: NewCategoryState, action: NewCategoryAction): NewCategoryState {
  const copy = { ...state };
  const skills = [...copy?.skills || []] as Skill[];

  const selectedSkill = skills.find((s) => s.id === action.skill?.id) || {} as Skill;

  const skillManamger = new SkillManager(copy, skills, action);
  const toolManamger = new ToolManager(copy, selectedSkill, action);

  const skill = {
    'set-category': { ...action.category },
    'update-category-name': { ...action.category, skills: state.skills },
    'reset-category': { name: '', skills: [] },

    'add-skill': skillManamger.addSkill.bind(skillManamger),
    'remove-skill': skillManamger.removeSkill.bind(skillManamger),
    'update-skill-name': skillManamger.updateSkillName.bind(skillManamger),

    'add-tool': toolManamger.addTool.bind(toolManamger),
    'update-tool': toolManamger.updateTool.bind(toolManamger),
    'remove-tool': toolManamger.removeTool.bind(toolManamger),
  } as NewSkillReducerReturnType;

  if (typeof skill[action.type] === 'function') {
    return (skill[action.type] as ReturnPartialCategoryModelType)();
  }

  return skill[action.type] as NewCategoryState;
}

export function skillNameReducer(state: CategoryNameState, action: CategoryNameAction): CategoryNameState {
  const copy = { ...state };

  if (action.type === 'set') {
    copy.id = action.id;
  } else {
    copy.id = null;
  }

  return copy;
}
