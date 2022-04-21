import { FC, useMemo, useReducer } from 'react';

import { skillNameReducer, skillReducer } from './reducers';
import { SkillContext } from './SkillContext';
import { SkillNameContext } from './SkillNameContext';

const CvFormProvider: FC = function ({ children }): JSX.Element {
  const [skillState, skillDispatch] = useReducer(skillReducer, { name: '', tools: [] });
  const [skillNameState, skillNameDispatch] = useReducer(skillNameReducer, { name: null });

  const skillContextValue = useMemo(() => ({
    state: skillState,
    dispatch: skillDispatch,
  }), [skillState]);

  const skillNameContextValue = useMemo(() => ({
    state: skillNameState,
    dispatch: skillNameDispatch,
  }), [skillNameState]);

  return (
    <SkillNameContext.Provider value={skillNameContextValue}>
      <SkillContext.Provider value={skillContextValue}>
        {children}
      </SkillContext.Provider>
    </SkillNameContext.Provider>
  );
};

export default CvFormProvider;
