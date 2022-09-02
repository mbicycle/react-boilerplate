import { memo } from 'react';
import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import { useUserFromDb } from '../../../personal-information/lib/query-hooks';
import TitleProject from './TitleProject';
// import Skill from './tool/Skill';
import { useUpdateCategory } from '../../../skills/components/helpers/hooks';

import {
  CategoryContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled,
  SaveButtonWrapperStyled,
  CancelButtonStyled,
} from '../../../skills/utils/styled';

const EditProject = function (): JSX.Element | null {
  // const {
  //   category,
  //   isLoading,
  //   handleCategoryNameChange,
  //   onSaveCategoryHandle,
  //   cancelHandle,
  // } = useUpdateCategory();
  const { data: user } = useUserFromDb();
  const projectToEdit = user?.projects.filter((project) => project.id);
  return (
    <div>
      `I;m ready to edit
      $
      {
        projectToEdit
      }
      `
    </div>
    // <CategoryContainerStyled>
    //   <TitleProject
    //     value={project?.name || ''}
    //     onChange={handleProjectNameChange}
    //   />
    //   {category?.skills?.length ? (
    //     <>
    //       <DividerStyled variant="fullWidth" />
    //       <ToolsContainerStyled>
    //         {
    //           category?.skills.map((skill) => (
    //             <Skill
    //               key={skill.id}
    //               skill={skill}
    //             />
    //           ))
    //         }
    //       </ToolsContainerStyled>
    //     </>
    //   ) : null}
    //   <SaveButtonWrapperStyled item>
    //     <CancelButtonStyled
    //       onClick={cancelHandle}
    //       variant="outlined"
    //     >
    //       {ButtonStep.Cancel}
    //     </CancelButtonStyled>
    //     <SaveButtonStyled
    //       disabled={!project?.name}
    //       onClick={onSaveProjectHandle}
    //       variant="contained"
    //       loading={isLoading}
    //     >
    //       {ButtonStep.Save}
    //     </SaveButtonStyled>
    //   </SaveButtonWrapperStyled>
    // </CategoryContainerStyled>
  );
};

export default memo(EditProject);
