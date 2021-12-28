import { memo } from 'react';

import { Grid, Typography } from '@mui/material';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import { Text } from '../../utils/constants';

import CategoryInput from './CategoryInput';
import LevelSelection from './LevelSelection';
import TimeUsedInput from './TimeUsedInput';

import { SaveButtonStyled, ToolContainerStyled } from '../../utils/styled';

const Tool = function (): JSX.Element {
  return (
    <ToolContainerStyled container direction="column">
      <Typography variant="h4">
        {Text.Tool}
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <CategoryInput />
        </Grid>
        <Grid container gap={4} wrap="nowrap">
          <Grid item xs={6} sx={{ mt: 3 }}>
            <LevelSelection />
          </Grid>
          <Grid item xs={6}>
            <TimeUsedInput />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        paddingTop={4}
        display="inline-flex"
        justifyContent="flex-end"
      >
        <SaveButtonStyled
          disabled={false}
          onClick={() => null}
          variant="contained"
        >
          {ButtonStep.Save}
        </SaveButtonStyled>
      </Grid>
    </ToolContainerStyled>
  );
};

export default memo(Tool);
