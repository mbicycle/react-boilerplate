import { FC, useMemo, useReducer } from 'react';

import { skillNameReducer, categoryReducer } from './reducers';
import { CategoryContext } from './CategoryContext';
import { SkillNameContext } from './SkillNameContext';

const CvFormProvider: FC = function ({ children }): JSX.Element {
  const [skillState, skillDispatch] = useReducer(categoryReducer, { name: '', tools: [] });
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
      <CategoryContext.Provider value={skillContextValue}>
        {children}
      </CategoryContext.Provider>
    </SkillNameContext.Provider>
  );
};

export default CvFormProvider;
