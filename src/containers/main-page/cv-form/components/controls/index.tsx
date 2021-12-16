import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import { CV_FORM_STEPS, Step } from '../../utils/constants';

import { StepperControlsWrapper } from './styled';
import { useFormData } from '../../local-state/hooks';

const CVFormControls = function (): JSX.Element {
  const { state, dispatch } = useFormData();
  const navigate = useNavigate();
  const { activeStep } = state;

  const handlePrevious = (): void => {
    navigate(-1);
    dispatch({ type: 'prev' });
  };

  const handleNext = (): void => {
    if (activeStep < CV_FORM_STEPS.length - 1) {
      dispatch({ type: 'next' });
    }
  };

  useEffect(() => {
    navigate(CV_FORM_STEPS[activeStep].route);
  }, [activeStep, navigate]);

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
