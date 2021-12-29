import { Tool } from '../components/fields/skills/utils/models';
import { LanguageAction, LanguageState } from './LanguageContext';
import { SkillAction, SkillState } from './SkillContext';

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
    copy = {
      category: action.skill?.category,
    };
  }

  if (action.type === 'add-tool') {
    tools.push({ name: '', level: '', experience: 0 });
    copy = { ...state, tools };
  }

  if (action.type === 'remove-tool') {
    copy.tools?.splice((tools as any)[(tools as any).length - 1], DELETE_COUNT);
  }

  console.log(copy);

  return copy;
}
