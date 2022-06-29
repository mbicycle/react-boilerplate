import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import TitleCategory from './TitleCategory';
import Skill from './tool/Skill';
import { useUpdateCategory } from './helpers/hooks';

import {
  CategoryContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled,
  SaveButtonWrapperStyled,
  CancelButtonStyled,
} from '../utils/styled';

const EditCategory = function (): JSX.Element | null {
  const {
    category,
    isLoading,
    handleCategoryNameChange,
    onSaveCategoryHandle,
    cancelHandle,
  } = useUpdateCategory();

  if (!category?.name) {
    return null;
  }

  return (
    <CategoryContainerStyled>
      <TitleCategory value={category?.name || ''} onChange={handleCategoryNameChange} />
      {category?.skills?.length ? (
        <>
          <DividerStyled variant="fullWidth" />
          <ToolsContainerStyled>
            {
              category?.skills.map((skill) => (
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
          disabled={false}
          onClick={onSaveCategoryHandle}
          variant="contained"
          loading={isLoading}
        >
          {ButtonStep.Save}
        </SaveButtonStyled>
      </SaveButtonWrapperStyled>
    </CategoryContainerStyled>
  );
};

export default EditCategory;
