import { FC, useMemo, useReducer } from 'react';

import { LanguageContext } from './LanguageContext';
import { languagesReducer } from './reducers';

const CvFormProvider: FC = function ({ children }): JSX.Element {
  const [langState, langDispatch] = useReducer(
    languagesReducer,
    [],
  );

  const languageContextValue = useMemo(() => ({
    state: langState,
    dispatch: langDispatch,
  }), [langState]);

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default CvFormProvider;
