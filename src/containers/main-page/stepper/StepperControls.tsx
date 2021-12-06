import React, { memo } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { StepperWrapperStyled } from './styled';
import { Step } from './utils/config';

interface StepperControlsProps {
    activeStep: number;
    handleBack: VoidFunction;
    handleNext: VoidFunction;
    stepsLength: number;
}

const StepperControls = function ({
  activeStep,
  stepsLength,
  handleBack,
  handleNext,
}: StepperControlsProps): JSX.Element {
  return (
    <StepperWrapperStyled>
      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
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
    </StepperWrapperStyled>
  );
};

export default memo(StepperControls);
