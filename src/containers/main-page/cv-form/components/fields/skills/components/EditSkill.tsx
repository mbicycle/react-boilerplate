import { useNavigate } from 'react-router-dom';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';
import { useGetSkillByName } from 'common/utils/hooks';
import { Skill } from 'common/models/User';

import { useAddOrEditSkill } from '../lib/query-hooks';
import TitleCategory from './TitleCategory';
import Tool from './tool';

import {
  SkillContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled,
  SaveButtonWrapperStyled,
} from '../utils/styled';

const EditSkill = function (): JSX.Element {
  const { data: { name }, user } = useGetSkillByName();
  const navigate = useNavigate();
  const { state } = useSkillContext();

  const { mutateAsync, isLoading } = useAddOrEditSkill();

  const onSaveToolsHandle = async (): Promise<void> => {
    const userSkill = user?.skills?.find((skill) => skill.name === name);

    if (name && user && user?.skills && userSkill?.name === name) {
      const skills = [...user.skills] || [];

      const idx = skills.findIndex((s) => s.name === name);

      skills[idx] = state as Skill;

      await mutateAsync({ ...user, skills });
    }

    navigate('/dashboard/skills');
  };

  return (
    <SkillContainerStyled>
      <TitleCategory value={name || ''} />
      {state?.tools?.length ? (
        <>
          <DividerStyled variant="fullWidth" />
          <ToolsContainerStyled>
            {
              state?.tools.map((tool) => (
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

export default EditSkill;
