import { useContext } from 'react';

import { SkillCollectionContext, SkillCollectionContextType } from './SkillCollectionContext';
import { SkillContext, SkillContextType } from './SkillContext';

export function useSkillContext(): SkillContextType {
  const context = useContext(SkillContext);

  if (context === undefined) {
    throw new Error('LanguageContext must be used within a CvFormProvider');
  }

  return context;
}

export function useSkillCollectionContext(): SkillCollectionContextType {
  const context = useContext(SkillCollectionContext);

  if (context === undefined) {
    throw new Error('SkillCollectionContext must be used within a CvFormProvider');
  }

  return context;
}
