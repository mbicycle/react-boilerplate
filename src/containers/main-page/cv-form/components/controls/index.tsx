import { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useIsFetching } from 'react-query';

import { Button } from '@mui/material';

import { ROUTE } from 'common/components/routes/utils/constants';

import { ButtonStep, Step } from '../../utils/constants';
import { useSetStep } from './hooks';

import { StepperControlsWrapper } from './styled';

const CVFormControls = function (): JSX.Element | null {
  const location = useLocation();
  const { activeStep, handleNext, handlePrevious } = useSetStep();
  const isFetching = useIsFetching();

  const stepsLength = Step.Certifications;

  if (location.pathname.includes(ROUTE.ADD)) return null;

  return (
    <StepperControlsWrapper>
      <Button
        disabled={!activeStep && !!isFetching}
        onClick={handlePrevious}
        variant="contained"
        color="secondary"
      >
        {ButtonStep.Back}
      </Button>
      {activeStep <= stepsLength && (
        <Button onClick={handleNext} variant="contained" disabled={!!isFetching}>
          {activeStep === stepsLength ? ButtonStep.Finish : ButtonStep.Next}
        </Button>
      )}
    </StepperControlsWrapper>
  );
};

export default memo(CVFormControls);
