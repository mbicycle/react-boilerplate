import React, { memo } from 'react';
import Step from '@mui/material/Step';
import { StepLabel, Typography } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import { CV_FORM_STEPS } from '../utils/config';

interface CVFormStepperProps {
    activeStep: number
}

const CVFormStepper = function ({ activeStep }: CVFormStepperProps): JSX.Element {
  return (
    <Stepper activeStep={activeStep}>
      {CV_FORM_STEPS.map((label) => (
        <Step key={label} sx={{ padding: 0 }}>
          <StepLabel>
            <Typography variant="body2" noWrap>{label}</Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default memo(CVFormStepper);
