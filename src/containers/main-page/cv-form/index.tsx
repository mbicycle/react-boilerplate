import { memo, useMemo } from 'react';

import { Box } from '@mui/material';

import { useFormData } from './local-state/hooks';
import { FORM_MAP } from './utils/config';

import CVFormStepper from './components/stepper';
import CVFormControls from './components/controls';
import CVFormTitle from './components/title';

import { CVFormWrapper } from './styled';

const CVForm = function (): JSX.Element {
  const { state } = useFormData();
  const { activeStep } = state;

  const CVFormCurrentStepComponent = useMemo(() => FORM_MAP[activeStep], [activeStep]);

  return (
    <CVFormWrapper>
      <Box p={10} flexGrow={1}>
        <CVFormStepper />
        <CVFormTitle />
        <CVFormCurrentStepComponent />
      </Box>
      <CVFormControls />
    </CVFormWrapper>
  );
};

export default memo(CVForm);
