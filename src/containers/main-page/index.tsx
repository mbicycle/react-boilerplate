import { memo } from 'react';
import { Box } from '@mui/material';

import CVForm from './cv-form';
import CvFormProvider from './cv-form/local-state/CVFormProvider';

import { FormWrapperStyled, MainPageContainerStyled, PreviewWrapperStyled } from './styled';

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
        <CvFormProvider>
          <CVForm />
        </CvFormProvider>
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

export default memo(MainPage);
