import { FC, useMemo, useReducer } from 'react';

import { skillCollectionReducer, skillReducer } from './reducers';
import { SkillCollectionContext } from './SkillCollectionContext';
import { SkillContext } from './SkillContext';

const CvFormProvider: FC = function ({ children }): JSX.Element {
  const [skillState, skillDispatch] = useReducer(skillReducer, { category: '', tools: [] });
  const [skillCollectionState, skillCollectionDispatch] = useReducer(skillCollectionReducer, []);

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
        {children}
      </SkillContext.Provider>
    </SkillCollectionContext.Provider>
  );
};

export default CvFormProvider;
