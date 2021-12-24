import { memo, Suspense, useMemo } from 'react';

import { Box } from '@mui/material';

import CircularSpinner from 'common/components/circular-spinner/circular-spinner';
import { useFormData } from './local-state/hooks';
import { FORM_MAP } from './utils/config';

import CVFormStepper from './components/stepper';
import CVFormControls from './components/controls';
import CVFormTitle from './components/title';

import { CVFormWrapperStyled } from './styled';
import LanguagesContextProvider from './components/fields/languages/local-state/LanguagesContextProvider';

const CVForm = function (): JSX.Element {
  const { state } = useFormData();
  const { activeStep } = state;

  const CVFormCurrentStepComponent = useMemo(() => FORM_MAP[activeStep], [activeStep]);

  return (
    <LanguagesContextProvider>
      <Suspense fallback={<CircularSpinner size="large" color="primary" />}>
        <CVFormWrapperStyled>
          <Box p={10} flexGrow={1}>
            <CVFormStepper />
            <CVFormTitle />
            <CVFormCurrentStepComponent />
          </Box>
          <CVFormControls />
        </CVFormWrapperStyled>
      </Suspense>
    </LanguagesContextProvider>
  );
};

export default memo(CVForm);
