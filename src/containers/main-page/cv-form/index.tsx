import { memo, useCallback } from 'react';

import { Box } from '@mui/material';

import { useFormData } from './state/hooks';
import { FORM_MAP } from './utils/config';
import { NEXT_STEP, PREV_STEP } from './state/actions';
import { CV_FORM_STEPS } from './utils/constants';

import CVFormStepper from './cv-form-stepper';
import CVFormControls from './cv-form-controls';
import CVFormTitle from './cv-form-title';

import { CVFormWrapper } from './styled';

const CVForm = function (): JSX.Element {
  const { state, dispatch } = useFormData();
  const { activeStep } = state;

  const handleNext = useCallback((): void => {
    if (activeStep < CV_FORM_STEPS.length - 1) dispatch(NEXT_STEP);
  }, [activeStep, dispatch]);

  const handlePrevious = useCallback((): void => {
    dispatch(PREV_STEP);
  }, [dispatch]);

  const CVFormCurrentStepComponent = FORM_MAP[activeStep];

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
