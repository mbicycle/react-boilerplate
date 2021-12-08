import { memo, useCallback, useMemo } from 'react';

import { Box } from '@mui/material';

import { useFormData } from './local-state/hooks';
import { FORM_MAP } from './utils/config';
// import { NEXT_STEP, PREV_STEP } from './state/actions';
import { CV_FORM_STEPS } from './utils/constants';

import CVFormStepper from './components/stepper';
import CVFormControls from './components/controls';
import CVFormTitle from './components/title';

import { CVFormWrapper } from './styled';

const CVForm = function (): JSX.Element {
  const { state, dispatch } = useFormData();
  const { activeStep } = state;

  const handleNext = useCallback((): void => {
    if (activeStep < CV_FORM_STEPS.length - 1) dispatch({ type: 'next' });
  }, [activeStep, dispatch]);

  const handlePrevious = useCallback((): void => {
    dispatch({ type: 'prev' });
  }, [dispatch]);

  const CVFormCurrentStepComponent = useMemo(() => FORM_MAP[activeStep], [activeStep]);

  return (
    <CVFormWrapper>
      <Box p={10} flexGrow={1}>
        <CVFormStepper activeStep={activeStep} />
        <CVFormTitle activeStep={activeStep} />
        <CVFormCurrentStepComponent />
      </Box>
      <CVFormControls
        activeStep={activeStep}
        stepsLength={CV_FORM_STEPS.length - 1}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </CVFormWrapper>
  );
};

export default memo(CVForm);
