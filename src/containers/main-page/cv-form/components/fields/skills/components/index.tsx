import { memo } from 'react';

import { Grid } from '@mui/material';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';

import TitleCategory from './TitleCategory';
import Tool from './tool';

import {
  SkillContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled, SaveButtonWrapperStyled,
} from '../utils/styled';

const Skill = function (): JSX.Element {
  const { state: { tools } } = useSkillContext();
  return (
    <SkillContainerStyled>
      <TitleCategory />
      {tools?.length ? (
        <>
          <DividerStyled variant="fullWidth" />
          <ToolsContainerStyled>
            {
              tools.map((tool) => (
                <Tool />
              ))
            }
          </ToolsContainerStyled>
        </>
      ) : null}
      <SaveButtonWrapperStyled item>
        <SaveButtonStyled
          disabled={false}
          onClick={() => null}
          variant="contained"
        >
          {ButtonStep.Save}
        </SaveButtonStyled>
      </SaveButtonWrapperStyled>
    </SkillContainerStyled>
  );
};

export default memo(Skill);
