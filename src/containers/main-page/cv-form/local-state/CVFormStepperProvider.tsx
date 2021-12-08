import { FC, useMemo, useReducer } from 'react';

import { CVFormStepperContext } from './CVFormStepperContext';
import { cvFormStepperReducer } from './reducers';

const CvFormStepperProvider: FC = function ({ children }): JSX.Element {
  const [cvFormStepperState, cvFormStepperDispatch] = useReducer(cvFormStepperReducer, { activeStep: 0 });

  const cvFormStepper = useMemo(
    () => ({
      state: cvFormStepperState,
      dispatch: cvFormStepperDispatch,
    }),
    [cvFormStepperState],
  );

  return (
    <CVFormStepperContext.Provider value={cvFormStepper}>
      {children}
    </CVFormStepperContext.Provider>
  );
};

export default CvFormStepperProvider;
