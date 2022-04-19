import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { useSkillCollectionContext, useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';

import TitleCategory from './TitleCategory';
import Tool from './tool';

import {
  SkillContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled,
  SaveButtonWrapperStyled,
} from '../utils/styled';
// import { useAddOrEditSkill } from '../lib/query-hooks';

const Skill = function (): JSX.Element {
  const { state: { tools, category } } = useSkillContext();
  const { dispatch } = useSkillCollectionContext();
  // const { mutateAsync } = useAddOrEditSkill();
  // const {} = useGetSkillBy()

  const navigate = useNavigate();

  const onSaveToolsHandle = (): void => {
    dispatch({ type: 'add', skill: { tools, category } });
    // mutateAsync({ _id: '', category: category || '', tools: tools || [] });
    navigate(-1);
  };

  return (
    <SkillContainerStyled>
      <TitleCategory value={category || ''} />
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
    </SkillContainerStyled>
  );
};

export default memo(Skill);
