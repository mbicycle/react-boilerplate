import { FC, useMemo, useReducer } from 'react';

import { LanguageContext } from './LanguageContext';
import { languagesReducer, skillReducer } from './reducers';
import { SkillContext } from './SkillContext';

const CvFormProvider: FC = function ({ children }): JSX.Element {
  const [langState, langDispatch] = useReducer(
    languagesReducer,
    [],
  );

  const [skillState, skillDispatch] = useReducer(skillReducer, { category: '', tools: [] });

  const languageContextValue = useMemo(() => ({
    state: langState,
    dispatch: langDispatch,
  }), [langState]);

  const skillContextValue = useMemo(() => ({
    state: skillState,
    dispatch: skillDispatch,
  }), [skillState]);

  return (
    <SkillContext.Provider value={skillContextValue}>
      <LanguageContext.Provider value={languageContextValue}>
        {children}
      </LanguageContext.Provider>
    </SkillContext.Provider>
  );
};

export default CvFormProvider;
