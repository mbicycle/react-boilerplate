import { useContext } from 'react';

import { NewCategoryContext, NewSkillContextType } from './NewCategoryContext';
import { CategoryByIdContext, CategoryNameContextType } from './CategoryNameContext';

export function useCategoryContext(): NewSkillContextType {
  const context = useContext(NewCategoryContext);

  if (context === undefined) {
    throw new Error('SkillContext must be used within a CvFormProvider');
  }

  return context;
}

export function useCategoryIdContext(): CategoryNameContextType {
  const context = useContext(CategoryByIdContext);

  if (context === undefined) {
    throw new Error('CategoryNameContext must be used within a CvFormProvider');
  }

  return context;
}
