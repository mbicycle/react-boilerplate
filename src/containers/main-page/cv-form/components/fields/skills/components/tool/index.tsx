import { memo, useCallback } from 'react';

import { Grid, Typography, SelectChangeEvent } from '@mui/material';

import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';
import { Tool as ToolType } from 'common/models/User';

import TextFieldOutlined from 'common/components/text-field-outlined';
import { Text, ToolInputText } from '../../utils/constants';
import { Level } from '../../../languages/components/utils/level.enum';

import LevelSelection from './LevelSelection';
import TimeUsedInput from './TimeUsedInput';

import { AddToolButtonStyled, ToolContainerStyled } from '../../utils/styled';

interface ToolProps {
toolData: ToolType;
 onChangeName: (name: string, toolData: ToolType) => void;
 onChangeLevel: (level: `${Level}`, toolData: ToolType) => void;
 onChangeExperience: (experience: number, toolData: ToolType) => void;
}

const Tool = function ({
  toolData,
  onChangeName,
  onChangeLevel,
  onChangeExperience,
}: ToolProps): JSX.Element {
  const { dispatch } = useSkillContext();

  const onDeleteToolHandle = useCallback((): void => {
    dispatch({ type: 'remove-tool', tool: toolData });
  }, [dispatch, toolData]);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChangeName(e.target.value, toolData);
  };

  const handleLevelChange = (e: SelectChangeEvent<`${Level}`>): void => {
    onChangeLevel(e.target.value as `${Level}`, toolData);
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChangeExperience(+e.target.value, toolData);
  };

  return (
    <ToolContainerStyled container direction="column">
      <Typography variant="h4">
        {Text.Tool}
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <TextFieldOutlined
            defaultValue={toolData.name}
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
              selectedLevel={toolData.level}
              onChange={handleLevelChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TimeUsedInput
              value={toolData.experience}
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
