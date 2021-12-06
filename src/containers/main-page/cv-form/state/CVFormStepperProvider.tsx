import React, { FC, useMemo, useReducer } from 'react';
import { CVFormStepperContext } from './CVFormStepperContext';
import { CVFormStepperReducer } from './reducers';

const CvFormStepperProvider: FC = function ({ children }): JSX.Element {
  const [CVFormStepperState, CVFormStepperDispatch] = useReducer(CVFormStepperReducer, { activeStep: 0 });
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
