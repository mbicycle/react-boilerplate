import * as React from 'react';
import { FC, useCallback } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import { Box, Typography } from '@mui/material';
import { StepConnectorStyled, StepLabelStyled } from './styled';
import StepperControls from './StepperControls';
import { CV_FORM_STEPS, getFormByStep } from './utils/config';
import { useForm } from '../../../common/utils/hooks';

const CustomStepper = function (): JSX.Element {
  const { value, handleChange } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);

  // TODO: Implement Nice interface & replace it everywhere
  const CurrentStepComponent: FC<{ value: { [key: string]: string }, handleChange: (e: { target: HTMLInputElement; }) => void }> = getFormByStep(activeStep);

  const handleNext = useCallback((): void => {
    if (activeStep < CV_FORM_STEPS.length - 1) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }, []);

  const handleBack = useCallback((): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  return (
    <>
      <Stepper activeStep={activeStep} connector={<StepConnectorStyled />}>

        {CV_FORM_STEPS.map((label) => (
          <Step key={label} sx={{ padding: 0 }}>
            <StepLabelStyled>
              <Typography variant="body2" noWrap>{label}</Typography>
            </StepLabelStyled>
          </Step>
        ))}
      </Stepper>
      <Box pt="4.2rem">
        <CurrentStepComponent value={value} handleChange={handleChange} />
        <StepperControls
          activeStep={activeStep}
          stepsLength={CV_FORM_STEPS.length - 1}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      </Box>
    </>
  );
};

export default CustomStepper;
