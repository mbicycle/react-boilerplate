import { FC, useMemo, useReducer } from 'react';

import { CVFormStepperContext } from './CVFormStepperContext';
import { cvFormStepperReducer } from './reducers';

const CvFormStepperProvider: FC = function ({ children }): JSX.Element {
  const [CVFormStepperState, CVFormStepperDispatch] = useReducer(cvFormStepperReducer, { activeStep: 0 });
  const value = useMemo(
    () => ({ state: CVFormStepperState, dispatch: CVFormStepperDispatch }),
    [CVFormStepperState],
  );
  return (
    <CVFormStepperContext.Provider value={value}>
      {children}
    </CVFormStepperContext.Provider>
  );
};

export default CvFormStepperProvider;
