import { useContext } from 'react';
import { LanguageContext, LocationContextType } from './LanguageContext';

export function useLanguageContext(): LocationContextType {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('LanguageContext must be used within a CvFormProvider');
  }

  return context;
}
