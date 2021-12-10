import { memo } from 'react';

import { Button } from '@mui/material';

import { CV_FORM_STEPS, Step } from '../../utils/constants';

import { StepperControlsWrapper } from './styled';
import { useFormData } from '../../local-state/hooks';

const CVFormControls = function (): JSX.Element {
  const { state, dispatch } = useFormData();
  const { activeStep } = state;

  const handlePrevious = (): void => {
    dispatch({ type: 'prev' });
  };

  const handleNext = (): void => {
    if (activeStep < CV_FORM_STEPS.length - 1) dispatch({ type: 'next' });
  };

  const stepsLength = CV_FORM_STEPS.length - 1;

  return (
    <StepperControlsWrapper>
      <Button
        disabled={!activeStep}
        onClick={handlePrevious}
        variant="contained"
        color="secondary"
      >
        {Step.Back}
      </Button>
      {activeStep <= stepsLength && (
        <Button onClick={handleNext} variant="contained">
          {activeStep === stepsLength ? Step.Finish : Step.Next}
        </Button>
      )}
    </StepperControlsWrapper>
  );
};

export default memo(CVFormControls);
