import * as React from 'react';
import { FC } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';

import { StepConnectorStyled, StepLabelStyled } from './styled';
import StepperControls from './StepperControls';
import { CV_FORM_STEPS, getFormByStep } from './utils/config';
import { useForm } from '../../../common/utils/hooks';

const CustomStepper = function (): JSX.Element {
  const { value, handleChange } = useForm();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const rawEnumArray = Object.values(CV_FORM_STEPS);
  const steps = rawEnumArray.slice(0, (rawEnumArray.length / 2));

  // TODO: Implement Nice interface & replace it everywhere
  const FormStepComponent: FC<{ value: { [key: string]: string }, handleChange: (e: { target: HTMLInputElement; }) => void }> = getFormByStep(activeStep);
  return (
    <>
      <Stepper activeStep={activeStep} connector={<StepConnectorStyled />}>
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabelStyled {...labelProps}>{label}</StepLabelStyled>
            </Step>
          );
        })}
      </Stepper>
      <form>
        <FormStepComponent value={value} handleChange={handleChange} />
      </form>
      <StepperControls
        activeStep={activeStep}
        stepsLength={steps.length - 1}
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </>
  );
};

export default CustomStepper;
