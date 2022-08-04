import { memo } from 'react';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import TitleCategory from './TitleCategory';
import { useCreateCategory } from './helpers/hooks';

import {
  CategoryContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled,
  SaveButtonWrapperStyled,
  CancelButtonStyled,
} from '../utils/styled';
import Skill from './tool/Skill';

const Category = function (): JSX.Element {
  const {
    skills,
    categoryName,
    isLoading,
    cancelHandle,
    onSaveSkillsHandle,
    handleCategoryNameChange,
  } = useCreateCategory();

  return (
    <CategoryContainerStyled>
      <TitleCategory onChange={handleCategoryNameChange} value={categoryName || ''} />

      {skills?.length ? (
        <>
          <DividerStyled variant="fullWidth" />
          <ToolsContainerStyled>
            {
              skills.map((skill) => (
                <Skill
                  key={skill.id}
                  skill={skill}
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
          disabled={!categoryName}
          onClick={onSaveSkillsHandle}
          variant="contained"
          loading={isLoading}
        >
          {ButtonStep.Save}
        </SaveButtonStyled>
      </SaveButtonWrapperStyled>
    </CategoryContainerStyled>
  );
};

export default memo(Category);
