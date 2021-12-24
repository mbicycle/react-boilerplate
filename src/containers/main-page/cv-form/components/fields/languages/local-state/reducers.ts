import { LanguageAction, LanguageState } from './LanguageContext';

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
