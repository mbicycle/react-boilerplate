import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface StepperControlsProps {
    activeStep: number;
    handleBack: () => void;
    handleNext: () => void;
    stepsLength: number;
}

const StepperControls = function ({
  activeStep,
  stepsLength,
  handleBack,
  handleNext,
}: StepperControlsProps): JSX.Element {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        sx={{ mr: 1 }}
        variant="contained"
        color="secondary"
      >
        Back
      </Button>
      <Box sx={{ flex: '1 1 auto' }} />
      {activeStep <= stepsLength && (
        <Button onClick={handleNext} variant="contained">
          {activeStep === stepsLength ? 'Finish' : 'Next'}
        </Button>
      )}

    </Box>
  );
};

export default StepperControls;
