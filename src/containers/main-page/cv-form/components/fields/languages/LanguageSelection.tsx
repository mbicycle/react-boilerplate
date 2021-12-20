import { memo } from 'react';

import { Button, Grid } from '@mui/material';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import { GridWrapperStyled } from './utils/styled';
import LanguageSelectionForm from './LanguageSelectionForm';

const LanguageSelection = function ({ onReturn }:{onReturn: VoidFunction}): JSX.Element {
  const onSaveHandle = (): void => {
    onReturn();
  };

  return (
    <GridWrapperStyled container>
      <Grid
        container
        wrap="nowrap"
        gap={6}
        justifyContent="space-between"
      >
        <LanguageSelectionForm />
      </Grid>
      <Grid
        item
        xs={12}
        paddingTop={6}
        display="inline-flex"
        justifyContent="flex-end"
      >
        <Button onClick={onSaveHandle} variant="contained">
          {ButtonStep.Save}
        </Button>
      </Grid>
    </GridWrapperStyled>
  );
};

export default memo(LanguageSelection);
