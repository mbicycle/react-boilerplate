import { memo, Suspense } from 'react';

import { Box } from '@mui/material';

import CircularSpinner from 'common/components/circular-spinner/circular-spinner';
import { Outlet } from 'react-router-dom';

import CVFormStepper from './components/stepper';
import CVFormControls from './components/controls';
import CVFormTitle from './components/title';

import { CVFormWrapperStyled } from './styled';

const CVForm = function (): JSX.Element {
  return (
    <Suspense fallback={<CircularSpinner size="large" color="primary" />}>
      <CVFormWrapperStyled>
        <Box p={10} flexGrow={1}>
          <CVFormStepper />
          <CVFormTitle />
          <Outlet />
        </Box>
        <CVFormControls />
      </CVFormWrapperStyled>
    </Suspense>
  );
};

export default memo(CVForm);
