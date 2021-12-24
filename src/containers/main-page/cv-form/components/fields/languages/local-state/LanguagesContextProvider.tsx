import React, { useMemo } from 'react';

import { LanguageContext } from './LanguageContext';
import { languagesReducer } from './reducers';

const LanguagesContextProvider = function ({ children }: {children: React.ReactNode}): JSX.Element {
  const [langState, langDispatch] = React.useReducer(
    languagesReducer,
    [],
  );

  const SideBarContextValue = useMemo(() => ({
    state: langState,
    dispatch: langDispatch,
  }), [langState]);

  return (
    <LanguageContext.Provider value={SideBarContextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguagesContextProvider;
