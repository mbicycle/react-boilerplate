import * as React from 'react';
import { memo, useCallback } from 'react';
import { Box } from '@mui/material';
import { CV_FORM_STEPS, FORM_MAP } from './utils/config';
import { CVFormWrapper } from './styled';
import { useFormData } from './state/hooks';
import { NEXT_STEP, PREV_STEP } from './state/actions';
import CVFormStepper from './cv-form-stepper';
import CVFormControls from './cv-form-controls';

const CVForm = function (): JSX.Element {
  const { state, dispatch } = useFormData();
  const { activeStep } = state;

  const handleNext = useCallback((): void => {
    if (activeStep < CV_FORM_STEPS.length - 1) dispatch(NEXT_STEP);
  }, [activeStep, dispatch]);

  const handlePrevious = useCallback((): void => {
    dispatch(PREV_STEP);
  }, [dispatch]);

  const CurrentStepComponent = FORM_MAP[activeStep];
  return (
    <CVFormWrapper>
      <div>
        <CVFormStepper activeStep={activeStep} />
        <Box mt={10.5}>
          <CurrentStepComponent />
        </Box>
      </div>
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
