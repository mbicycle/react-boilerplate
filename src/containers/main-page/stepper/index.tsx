import * as React from 'react';
import { FC } from 'react';
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

  const stepsArrayRaw = Object.values(CV_FORM_STEPS);
  const steps = stepsArrayRaw.slice(0, (stepsArrayRaw.length / 2));

  // TODO: Implement Nice interface & replace it everywhere
  const CurrentStepComponent: FC<{ value: { [key: string]: string }, handleChange: (e: { target: HTMLInputElement; }) => void }> = getFormByStep(activeStep);

  const handleNext = (): void => {
    if (activeStep < steps.length - 1) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Stepper activeStep={activeStep} connector={<StepConnectorStyled />}>

        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};
          return (
            <Step key={label} {...stepProps} sx={{ padding: 0 }}>
              <StepLabelStyled {...labelProps}>
                <Typography variant="body2" noWrap>{label}</Typography>
              </StepLabelStyled>
            </Step>
          );
        })}
      </Stepper>
      <Box pt="4.2rem">
        <CurrentStepComponent value={value} handleChange={handleChange} />
        <StepperControls
          activeStep={activeStep}
          stepsLength={steps.length - 1}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      </Box>
    </>
  );
};

export default CustomStepper;
