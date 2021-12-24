import React from 'react';

import { LanguageContext, LocationContextType } from './LanguageContext';

export function useLanguageContext(): LocationContextType {
  const context = React.useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('LanguageContext must be used within a LanguageContextProvider');
  }

  return context;
}
