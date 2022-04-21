import { memo, useCallback } from 'react';

import { Grid, Typography } from '@mui/material';

import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';

import { Tool as ToolType } from 'common/models/User';
import { Text } from '../../utils/constants';

import SkillToolInput from './CategoryInput';
import LevelSelection from './LevelSelection';
import TimeUsedInput from './TimeUsedInput';
import { useUpdateTool } from './hooks';

import { AddToolButtonStyled, ToolContainerStyled } from '../../utils/styled';

const Tool = function ({ toolData }: {toolData: ToolType}): JSX.Element {
  const { dispatch } = useSkillContext();
  const { onToolChange, values } = useUpdateTool({ toolData });

  const onDeleteToolHandle = useCallback((): void => {
    dispatch({ type: 'remove-tool', tool: toolData });
  }, [dispatch, toolData]);

  return (
    <ToolContainerStyled container direction="column">
      <Typography variant="h4">
        {Text.Tool}
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <SkillToolInput
            value={values.name}
            onChange={onToolChange}
          />
        </Grid>
        <Grid
          container
          gap={4}
          wrap="nowrap"
        >
          <Grid
            item
            xs={6}
            sx={{ mt: 3 }}
          >
            <LevelSelection
              selectedLevel={values.level}
              onChange={onToolChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TimeUsedInput
              value={values.experience}
              onChange={onToolChange}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          paddingTop={3}
          display="inline-flex"
          justifyContent="flex-end"
        >
          <AddToolButtonStyled
            sx={{ width: 120 }}
            onClick={onDeleteToolHandle}
          >
            {Text.Delete}
          </AddToolButtonStyled>
        </Grid>
      </Grid>
    </ToolContainerStyled>
  );
};

export default memo(Tool);
