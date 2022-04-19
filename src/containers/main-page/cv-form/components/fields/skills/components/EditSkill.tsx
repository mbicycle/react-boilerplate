import { Outlet } from 'react-router-dom';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
// import { useSkillCollectionContext, useSkillContext
// } from 'containers/main-page/cv-form/local-state/hooks';

import { useGetSkillById } from 'common/utils/hooks';
import TitleCategory from './TitleCategory';
import Tool from './tool';

import {
  SkillContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled,
  SaveButtonWrapperStyled,
} from '../utils/styled';
// import { useAddOrEditSkill } from '../lib/query-hooks';

const EditSkill = function (): JSX.Element {
  const { data: { name, tools } } = useGetSkillById();

  const onSaveToolsHandle = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const r = 5;
  };

  // console.log('category, tools', category, tools);

  return (
    <SkillContainerStyled>
      <TitleCategory value={name || ''} />
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
        >
          {ButtonStep.Save}
        </SaveButtonStyled>
      </SaveButtonWrapperStyled>
      <Outlet />

    </SkillContainerStyled>
  );
};

export default EditSkill;
