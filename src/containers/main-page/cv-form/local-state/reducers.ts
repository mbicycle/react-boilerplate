import { CVFormStepperActionType, CVFormStepperState } from './CVFormStepperContext';

export const cvFormStepperReducer = (
  state: CVFormStepperState,
  action: CVFormStepperActionType,
): CVFormStepperState => {
  const { activeStep } = { ...state };

  const reducerMap = {
    next: { activeStep: activeStep + 1 },
    prev: { activeStep: activeStep - 1 },
  };

  return reducerMap[action.type];
};
