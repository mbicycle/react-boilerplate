import React, {
  memo, useCallback, useEffect, useRef,
} from 'react';

import { Grid, Typography, SelectChangeEvent } from '@mui/material';

import { useCategoryContext } from 'containers/main-page/cv-form/local-state/hooks';
import { Tool as ToolType } from 'common/models/User';

import TextFieldOutlined from 'common/components/text-field-outlined';
import { Text, ToolInputText } from '../../utils/constants';
import { Level } from '../../../languages/components/utils/level.enum';

import LevelSelection from './LevelSelection';
import TimeUsedInput from './TimeUsedInput';

import { AddToolButtonStyled, ToolContainerStyled } from '../../utils/styled';

interface ToolProps {
  tool: ToolType;
  skillId: string;
}

const Tool = function ({
  tool,
  skillId,
}: ToolProps): JSX.Element {
  const { dispatch } = useCategoryContext();
  const onDeleteToolHandle = useCallback((): void => {
    dispatch({ type: 'remove-tool', tool, skillId });
  }, [dispatch, skillId, tool]);
  const listRef = useRef<HTMLDivElement>(null);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    dispatch({
      type: 'update-tool',
      skillId,
      tool: { ...tool, name: value },
    });
  };

  const handleLevelChange = (event: SelectChangeEvent<`${Level}`>): void => {
    const { value } = event.target;

    dispatch({
      type: 'update-tool',
      skillId,
      tool: { ...tool, level: value as `${Level}` },
    });
  };

  const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;

    dispatch({
      type: 'update-tool',
      skillId,
      tool: { ...tool, experience: +value },
    });
  };

  useEffect(() => {
    if (listRef.current) listRef.current.scrollIntoView({ block: 'end', inline: 'nearest' });
  });

  return (
    <ToolContainerStyled container direction="column" ref={listRef}>
      <Typography variant="h4">
        {Text.Tool}
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <TextFieldOutlined
            defaultValue={tool.name}
            label={ToolInputText.Label}
            name={ToolInputText.Name}
            onChange={handleChangeName}
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
              selectedLevel={tool.level}
              onChange={handleLevelChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TimeUsedInput
              value={tool.experience}
              onChange={handleExperienceChange}
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
