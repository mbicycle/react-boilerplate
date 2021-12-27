import { memo } from 'react';

import { StepLabel, Stepper, Typography } from '@mui/material';

import { useSetStep } from '../controls/hooks';
import { CV_FORM_STEPS } from '../../utils/constants';

import { StepConnectorStyled, StepStyled } from './styled';

const CVFormStepper = function (): JSX.Element {
  const { activeStep } = useSetStep();

  return (
    <Stepper
      activeStep={activeStep}
      connector={<StepConnectorStyled />}
    >
      {CV_FORM_STEPS.map((label) => (
        <StepStyled key={label.text}>
          <StepLabel>
            <Typography variant="body2" noWrap>{label.text}</Typography>
          </StepLabel>
        </StepStyled>
      ))}
    </Stepper>
  );
};

export default memo(CVFormStepper);
