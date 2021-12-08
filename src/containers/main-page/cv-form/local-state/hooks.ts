import { useContext } from 'react';
import { ContextType, CVFormStepperContext } from './CVFormStepperContext';

export const useFormData = (): ContextType => {
  const context = useContext(CVFormStepperContext);
  if (context === undefined) {
    throw new Error('useCVFormStepper must be used within a CVFormStepperProvider');
  }

  return context;
};
