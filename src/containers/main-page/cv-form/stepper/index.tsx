import React from 'react';

import {
  Step, StepLabel, Stepper, Typography,
} from '@mui/material';

import { CV_FORM_STEPS } from '../utils/constants';

interface CVFormStepperProps {
    activeStep: number
}

const CVFormStepper = function ({ activeStep }: CVFormStepperProps): JSX.Element {
  return (
    <Stepper activeStep={activeStep}>
      {CV_FORM_STEPS.map((label) => (
        <Step sx={{ padding: 0 }}>
          <StepLabel>
            <Typography variant="body2" noWrap>{label}</Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CVFormStepper;
