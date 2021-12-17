import { memo } from 'react';

import {
  Step, StepLabel, Stepper, Typography,
} from '@mui/material';

import { useFormData } from '../../local-state/hooks';

import { CV_FORM_STEPS } from '../../utils/constants';

const CVFormStepper = function (): JSX.Element {
  const { state } = useFormData();
  const { activeStep } = state;

  return (
    <Stepper activeStep={activeStep}>
      {CV_FORM_STEPS.map((label) => (
        <Step key={label.text} sx={{ padding: 0 }}>
          <StepLabel>
            <Typography variant="body2" noWrap>{label.text}</Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default memo(CVFormStepper);
