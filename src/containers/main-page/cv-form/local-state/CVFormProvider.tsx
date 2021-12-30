import { FC, useMemo, useReducer } from 'react';

import { LanguageContext } from './LanguageContext';
import { languagesReducer, skillReducer, toolReducer } from './reducers';
import { SkillContext } from './SkillContext';
import { ToolContext } from './ToolContext';

const CvFormProvider: FC = function ({ children }): JSX.Element {
  const [langState, langDispatch] = useReducer(languagesReducer, []);
  const [skillState, skillDispatch] = useReducer(skillReducer, { category: '', tools: [] });
  const [toolState, toolDispatch] = useReducer(toolReducer, {
    id: '',
    name: '',
    level: '',
    experience: 0,
  });

  const languageContextValue = useMemo(() => ({
    state: langState,
    dispatch: langDispatch,
  }), [langState]);

  const skillContextValue = useMemo(() => ({
    state: skillState,
    dispatch: skillDispatch,
  }), [skillState]);

  const toolContextValue = useMemo(() => ({
    state: toolState,
    dispatch: toolDispatch,
  }), [toolState]);

  return (
    <SkillContext.Provider value={skillContextValue}>
      <LanguageContext.Provider value={languageContextValue}>
        <ToolContext.Provider value={toolContextValue}>
          {children}
        </ToolContext.Provider>
      </LanguageContext.Provider>
    </SkillContext.Provider>
  );
};

export default CvFormProvider;
