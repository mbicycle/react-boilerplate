import { memo } from 'react';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import TitleCategory from './TitleCategory';
import { useSaveSkill } from './helpers/hooks';
import Tool from './tool';

import {
  SkillContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled,
  SaveButtonWrapperStyled,
} from '../utils/styled';

const Skill = function (): JSX.Element {
  const {
    tools,
    skillName,
    isLoading,
    onSaveToolsHandle,
    handleSkillNameChange,
  } = useSaveSkill();

  return (
    <SkillContainerStyled>
      <TitleCategory
        onChange={handleSkillNameChange}
        value={skillName || ''}
      />
      {tools?.length ? (
        <>
          <DividerStyled variant="fullWidth" />
          <ToolsContainerStyled>
            {
              tools.map((tool) => (
                <Tool key={tool.name} toolData={tool} />
              ))
            }
          </ToolsContainerStyled>
        </>
      ) : null}
      <SaveButtonWrapperStyled item>
        <SaveButtonStyled
          disabled={false}
          onClick={onSaveToolsHandle}
          variant="contained"
          loading={isLoading}
        >
          {ButtonStep.Save}
        </SaveButtonStyled>
      </SaveButtonWrapperStyled>
    </SkillContainerStyled>
  );
};

export default memo(Skill);
