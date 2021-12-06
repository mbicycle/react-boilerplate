import React, { memo } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { StepperControlsWrapper } from '../styled';
import { Step } from '../utils/config';

interface StepperControlsProps {
    activeStep: number;
    handlePrevious: VoidFunction;
    handleNext: VoidFunction;
    stepsLength: number;
}

const CVFormControls = function ({
  activeStep,
  stepsLength,
  handlePrevious,
  handleNext,
}: StepperControlsProps): JSX.Element {
  return (
    <StepperControlsWrapper>
      <Button
        disabled={activeStep === 0}
        onClick={handlePrevious}
        variant="contained"
        color="secondary"
      >
        Back
      </Button>
      <Box />
      {activeStep <= stepsLength && (
        <Button onClick={handleNext} variant="contained">
          {activeStep === stepsLength ? Step.Finish : Step.Next}
        </Button>
      )}
    </StepperControlsWrapper>
  );
};

export default memo(CVFormControls);
