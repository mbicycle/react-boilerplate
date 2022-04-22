import { memo } from 'react';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import TitleCategory from './TitleCategory';
import { useCreateSkill, useSaveSkill } from './helpers/hooks';
import Tool from './tool';

import {
  SkillContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled,
  SaveButtonWrapperStyled,
  CancelButtonStyled,
} from '../utils/styled';

const Skill = function (): JSX.Element {
  const {
    tools,
    skillName,
    isLoading,
    cancelHandle,
    onSaveToolsHandle,
    handleSkillNameChange,
  } = useSaveSkill();

  const {
    handleChangeExperience,
    handleChangeLevel,
    handleToolNameChange,
  } = useCreateSkill();

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
                <Tool
                  key={tool.name}
                  toolData={tool}
                  onChangeName={handleToolNameChange}
                  onChangeLevel={handleChangeLevel}
                  onChangeExperience={handleChangeExperience}
                />
              ))
            }
          </ToolsContainerStyled>
        </>
      ) : null}
      <SaveButtonWrapperStyled item>
        <CancelButtonStyled
          onClick={cancelHandle}
          variant="outlined"
        >
          {ButtonStep.Cancel}
        </CancelButtonStyled>
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
