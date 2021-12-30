import { memo, useCallback, useEffect } from 'react';

import { Grid, Typography } from '@mui/material';

import { useForm } from 'common/utils/hooks';
import { useSkillContext, useToolContext } from 'containers/main-page/cv-form/local-state/hooks';

import { Text } from '../../utils/constants';
import { Tool as ToolType } from '../../utils/models';

import CategoryInput from './CategoryInput';
import LevelSelection from './LevelSelection';
import TimeUsedInput from './TimeUsedInput';

import { GrayButtonStyled, ToolContainerStyled } from '../../utils/styled';

const Tool = function ({ toolData }: {toolData: ToolType}): JSX.Element {
  const { values, handleChange } = useForm<ToolType>();
  const { dispatch: skillDispatch } = useSkillContext();
  const { dispatch: toolDispatch } = useToolContext();

  const onDeleteToolHandle = useCallback((): void => {
    skillDispatch({ type: 'remove-tool' });
  }, [skillDispatch]);

  useEffect(() => {
    toolDispatch({ type: 'update', tool: { ...toolData, ...values } });
  }, [toolDispatch, values, toolData]);

  return (
    <ToolContainerStyled container direction="column">
      <Typography variant="h4">
        {Text.Tool}
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <CategoryInput onChange={handleChange} />
        </Grid>
        <Grid container gap={4} wrap="nowrap">
          <Grid
            item
            xs={6}
            sx={{ mt: 3 }}
          >
            <LevelSelection
              selectedLevel={values?.level}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TimeUsedInput onChange={handleChange} />
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
