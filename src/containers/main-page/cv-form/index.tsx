import { memo, Suspense } from 'react';

import CircularSpinner from 'common/components/circular-spinner/circular-spinner';
import { Outlet } from 'react-router-dom';

import CVFormStepper from './components/stepper';
import CVFormControls from './components/controls';
import CVFormTitle from './components/title';

import { CVFormContainerStyled, CVFormWrapperStyled } from './styled';

const CVForm = function (): JSX.Element {
  return (
    <Suspense fallback={<CircularSpinner size="large" color="primary" />}>
      <CVFormWrapperStyled>
        <CVFormContainerStyled>
          <CVFormStepper />
          <CVFormTitle />
          <Outlet />
        </CVFormContainerStyled>
        <CVFormControls />
      </CVFormWrapperStyled>
    </Suspense>
  );
};

export default memo(CVForm);
