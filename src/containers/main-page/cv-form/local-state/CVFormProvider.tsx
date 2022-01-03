import { FC, useMemo, useReducer } from 'react';

import { LanguageContext } from './LanguageContext';
import { languagesReducer, skillCollectionReducer, skillReducer } from './reducers';
import { SkillCollectionContext } from './SkillCollectionContext';
import { SkillContext } from './SkillContext';

const CvFormProvider: FC = function ({ children }): JSX.Element {
  const [langState, langDispatch] = useReducer(languagesReducer, []);
  const [skillState, skillDispatch] = useReducer(skillReducer, { category: '', tools: [] });
  const [skillCollectionState, skillCollectionDispatch] = useReducer(skillCollectionReducer, []);

  const languageContextValue = useMemo(() => ({
    state: langState,
    dispatch: langDispatch,
  }), [langState]);

  const skillContextValue = useMemo(() => ({
    state: skillState,
    dispatch: skillDispatch,
  }), [skillState]);

  const skillCollectionContextValue = useMemo(() => ({
    state: skillCollectionState,
    dispatch: skillCollectionDispatch,
  }), [skillCollectionState]);

  return (
    <SkillCollectionContext.Provider value={skillCollectionContextValue}>
      <SkillContext.Provider value={skillContextValue}>
        <LanguageContext.Provider value={languageContextValue}>
          {children}
        </LanguageContext.Provider>
      </SkillContext.Provider>
    </SkillCollectionContext.Provider>
  );
};

export default CvFormProvider;
