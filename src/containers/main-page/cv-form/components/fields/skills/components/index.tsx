import { memo } from 'react';

import TitleCategory from './TitleCategory';

import { SkillContainerStyled, DividerStyled } from '../utils/styled';
import Tool from './tool';

const Skill = function (): JSX.Element {
  return (
    <SkillContainerStyled>
      <TitleCategory />
      <DividerStyled variant="fullWidth" />
      <Tool />
    </SkillContainerStyled>
  );
};

export default memo(Skill);
