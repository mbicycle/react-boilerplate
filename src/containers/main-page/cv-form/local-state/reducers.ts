import { v4 as uuidv4 } from 'uuid';

import { Tool } from '../components/fields/skills/utils/models';
import { useSkillContext } from './hooks';
import { LanguageAction, LanguageState } from './LanguageContext';
import { SkillAction, SkillState } from './SkillContext';
import { ToolAction, ToolState } from './ToolContext';

const DELETE_COUNT = 1 as const;

export function languagesReducer(state: LanguageState, action: LanguageAction): LanguageState {
  const copy = [...state];

  if (action.leveledLanguage.language && action.leveledLanguage.level) {
    if (action.type === 'add') {
      copy.push(action.leveledLanguage);
    } else {
      const langIndex = copy.findIndex((x) => x.language === action.leveledLanguage.language);
      copy.splice(langIndex, DELETE_COUNT);
    }
  }

  return copy;
}

export function skillReducer(state: SkillState, action: SkillAction): SkillState {
  let copy = { ...state };
  const tools = [...copy?.tools || []] as Tool[];

  if (action.type === 'add-category') {
    copy = { category: action.skill?.category };
  }

  if (action.type === 'add-tool') {
    tools.push({
      id: uuidv4(), name: '', level: '', experience: 0,
    });
    copy = { ...state, tools };
  }

  if (action.type === 'update-tools') {
    copy = { ...state, ...action.newTools };
  }

  // TODO: Refactor to delet by id
  if (action.type === 'remove-tool' && copy.tools) {
    copy.tools.splice((tools as any)[(tools as any).length - 1], DELETE_COUNT);
  }

  return copy;
}

export function toolReducer(state: ToolState, action: ToolAction): ToolState {
  let copy = { ...state };
  if (action.type === 'update') {
    copy = action.tool;
  }

  return copy;
}
