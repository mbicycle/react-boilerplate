import { memo, useCallback } from 'react';

import { Grid, Typography, SelectChangeEvent } from '@mui/material';

import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';
import { Skill as SkillType, Tool as ToolType } from 'common/models/User';

import TextFieldOutlined from 'common/components/text-field-outlined';
import { AddCircleIconStyled } from 'common/components/add-pattern/styled';
import { Text, ToolInputText } from '../../utils/constants';
import { Level } from '../../../languages/components/utils/level.enum';

import {
  AddToolButtonStyled, DividerStyled, ToolContainerStyled, ToolsContainerStyled,
} from '../../utils/styled';
import Tool from '.';

interface SkillProps {
skillData: SkillType;
 onChangeName: (name: string, toolData: ToolType) => void;
 onChangeLevel: (level: `${Level}`, toolData: ToolType) => void;
 onChangeExperience: (experience: number, toolData: ToolType) => void;
}

const Skill = function ({
  skillData,
  onChangeName,
  onChangeLevel,
  onChangeExperience,
}: SkillProps): JSX.Element {
  const { dispatch } = useSkillContext();

  const onDeleteToolHandle = useCallback((): void => {
    // dispatch({ type: 'remove-tool', tool: toolData });
  }, [dispatch, skillData]);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // onChangeName(e.target.value, toolData);
  };

  const handleLevelChange = (e: SelectChangeEvent<`${Level}`>): void => {
    // onChangeLevel(e.target.value as `${Level}`, toolData);
  };

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // onChangeExperience(+e.target.value, toolData);
  };

  const onAddToolHandle = (): void => {
    dispatch({ type: 'add-tool' });
  };

  return (
    <ToolContainerStyled container direction="column">
      <Typography variant="h4">
        {Text.Skill}
      </Typography>
      <Grid container>
        <Grid item container xs={12} wrap="nowrap" gap={4}>
          <TextFieldOutlined
            defaultValue={skillData.name}
            label={ToolInputText.Label}
            name={ToolInputText.Name}
            onChange={handleChangeName}
          />
          <AddToolButtonStyled
            disabled={false}
            onClick={onAddToolHandle}
            sx={{ mt: 3 }}
          >
            <AddCircleIconStyled />
            Add a Tool
          </AddToolButtonStyled>
        </Grid>
        <Grid
          container
          gap={4}
          wrap="nowrap"
        >
          {skillData?.tools?.length ? (
            <>
              <DividerStyled variant="fullWidth" />
              <ToolsContainerStyled>
                {
                  skillData?.tools.map((tool) => (
                    <Tool
                      key={tool.name}
                      toolData={tool}
                      onChangeName={onChangeName}
                      onChangeLevel={onChangeLevel}
                      onChangeExperience={onChangeExperience}
                    />
                  ))
                }
              </ToolsContainerStyled>
            </>
          ) : null}
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

export default memo(Skill);
