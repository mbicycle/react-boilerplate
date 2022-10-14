import { FC, useMemo, useReducer } from 'react';

import { skillNameReducer, newCategoryReducer } from './reducers';
import { CategoryByIdContext } from './CategoryNameContext';
import { NewCategoryContext } from './NewCategoryContext';

const CvFormProvider: FC = function ({ children }): JSX.Element {
  const [categoryState, categoryDispatch] = useReducer(newCategoryReducer, { name: '', skills: [] });
  const [skillNameState, skillNameDispatch] = useReducer(skillNameReducer, { id: null });

  const skillNameContextValue = useMemo(() => ({
    state: skillNameState,
    dispatch: skillNameDispatch,
  }), [skillNameState]);

  const categoryContextValue = useMemo(() => ({
    state: categoryState,
    dispatch: categoryDispatch,
  }), [categoryState]);

  return (
    <CategoryByIdContext.Provider value={skillNameContextValue}>
      <NewCategoryContext.Provider value={categoryContextValue}>
        {children}
      </NewCategoryContext.Provider>
    </CategoryByIdContext.Provider>
  );
};

export default CvFormProvider;
