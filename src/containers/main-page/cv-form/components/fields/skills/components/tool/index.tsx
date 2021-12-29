import { memo } from 'react';

import { Grid, Typography } from '@mui/material';

import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';

import { Text } from '../../utils/constants';

import CategoryInput from './CategoryInput';
import LevelSelection from './LevelSelection';
import TimeUsedInput from './TimeUsedInput';

import { GrayButtonStyled, ToolContainerStyled } from '../../utils/styled';

const Tool = function (): JSX.Element {
  const { dispatch } = useSkillContext();

  const onDeleteToolHandle = (): void => {
    dispatch({ type: 'remove-tool' });
  };

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
          <Grid
            item
            xs={6}
            sx={{ mt: 3 }}
          >
            <LevelSelection />
          </Grid>
          <Grid item xs={6}>
            <TimeUsedInput />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          paddingTop={3}
          display="inline-flex"
          justifyContent="flex-end"
        >
          <GrayButtonStyled
            sx={{ width: 120 }}
            onClick={onDeleteToolHandle}
          >
            {Text.Delete}
          </GrayButtonStyled>
        </Grid>
      </Grid>
    </ToolContainerStyled>
  );
};

export default memo(Tool);
