import React from 'react';
import { Box } from '@mui/material';
import { FormWrapperStyled, MainPageContainerStyled, PreviewWrapperStyled } from './styled';
import CVForm from './cv-form';
import CvFormStepperProvider from './cv-form/state/CVFormStepperProvider';

const MainPage = function (): JSX.Element {
  return (
    <MainPageContainerStyled container>
      <FormWrapperStyled
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={6}
      >
        <CvFormStepperProvider>
          <CVForm />
        </CvFormStepperProvider>
      </FormWrapperStyled>
      <PreviewWrapperStyled
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={6}
      >
        <Box>
          Preview
        </Box>

      </PreviewWrapperStyled>
    </MainPageContainerStyled>
  );
};

export default MainPage;
