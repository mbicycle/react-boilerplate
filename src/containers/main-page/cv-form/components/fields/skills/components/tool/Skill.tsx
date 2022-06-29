import { memo, useCallback } from 'react';

import { Grid, Typography } from '@mui/material';

import { useCategoryContext } from 'containers/main-page/cv-form/local-state/hooks';
import { Skill as SkillType } from 'common/models/User';

import TextFieldOutlined from 'common/components/text-field-outlined';
import { AddCircleIconStyled } from 'common/components/add-pattern/styled';
import { Text, ToolInputText } from '../../utils/constants';

import {
  AddToolButtonStyled, DividerStyled, ToolContainerStyled, ToolsContainerStyled,
} from '../../utils/styled';
import Tool from '.';

interface SkillProps {
  skill: SkillType;
}

const Skill = function ({ skill }: SkillProps): JSX.Element {
  const { dispatch: dispatchCategory } = useCategoryContext();

  const onDeleteSkillHandle = useCallback((): void => {
    dispatchCategory({ type: 'remove-skill', skill });
  }, [dispatchCategory, skill]);

  const handleSkillNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatchCategory({
      type: 'update-skill-name',
      skillId: skill.id,
      skillName: e.target.value,
    });
  };

  const onAddToolHandle = (): void => {
    dispatchCategory({ type: 'add-tool', skill });
  };

  return (
    <ToolContainerStyled container direction="column">
      <Typography variant="h4">
        {Text.Skill}
      </Typography>
      <Grid container>
        <Grid item container xs={12} wrap="nowrap" gap={4}>
          <TextFieldOutlined
            defaultValue={skill.name}
            label={ToolInputText.Label}
            name={ToolInputText.Name}
            onChange={handleSkillNameChange}
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
          {!!skill?.tools?.length && (
            <>
              <DividerStyled variant="fullWidth" />
              <ToolsContainerStyled>
                {
                  skill?.tools.map((tool) => (
                    <Tool
                      key={tool.id}
                      skillId={skill.id}
                      tool={tool}
                    />
                  ))
                }
              </ToolsContainerStyled>
            </>
          )}
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
            onClick={onDeleteSkillHandle}
          >
            {Text.Delete}
          </AddToolButtonStyled>
        </Grid>
      </Grid>
    </ToolContainerStyled>
  );
};

export default memo(Skill);
