import { memo } from 'react';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';

import TitleCategory from './TitleCategory';
import Tool from './tool';

import {
  SkillContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled,
  SaveButtonWrapperStyled,
} from '../utils/styled';
import { useMappingSkills } from './tool/hooks';

const Skill = function (): JSX.Element {
  const { state: { tools } } = useSkillContext();

  const onSaveTools = useMappingSkills({ tools });

  return (
    <SkillContainerStyled>
      <TitleCategory />
      {tools?.length ? (
        <>
          <DividerStyled variant="fullWidth" />
          <ToolsContainerStyled>
            {
              tools.map((tool) => (
                <Tool key={tool.id} toolData={tool} />
              ))
            }
          </ToolsContainerStyled>
        </>
      ) : null}
      <SaveButtonWrapperStyled item>
        <SaveButtonStyled
          disabled={false}
          onClick={onSaveTools}
          variant="contained"
        >
          {ButtonStep.Save}
        </SaveButtonStyled>
      </SaveButtonWrapperStyled>
    </SkillContainerStyled>
  );
};

export default memo(Skill);
