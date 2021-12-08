import { memo } from 'react';

import { Box, Button } from '@mui/material';

import { Step } from '../../utils/constants';

import { StepperControlsWrapper } from './styled';

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
        disabled={!activeStep}
        onClick={handlePrevious}
        variant="contained"
        color="secondary"
      >
        {Step.Back}
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
