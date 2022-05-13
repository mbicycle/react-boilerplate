import { useNavigate } from 'react-router-dom';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { useSkillContext, useSkillNameContext } from 'containers/main-page/cv-form/local-state/hooks';
import { useGetCategoryByName } from 'common/utils/hooks';
import { Tool as ToolType } from 'common/models/User';

import { useAddOrEditSkill } from '../lib/query-hooks';
import TitleCategory from './TitleCategory';

import {
  SkillContainerStyled, DividerStyled,
  SaveButtonStyled, ToolsContainerStyled,
  SaveButtonWrapperStyled,
  CancelButtonStyled,
} from '../utils/styled';
import { Level } from '../../languages/components/utils/level.enum';
import Skill from './tool/Skill';

const EditTool = function (): JSX.Element {
  const { data: { name }, user } = useGetCategoryByName();
  const navigate = useNavigate();
  const { state, dispatch } = useSkillContext();

  const { mutateAsync, isLoading } = useAddOrEditSkill();

  const { state: { name: skillName } } = useSkillNameContext();

  const tool = user.categories.find((c) => c.name === skillName);
  console.log(tool);

  const onSaveToolsHandle = async (): Promise<void> => {
    // const userSkill = user?.skills?.find((skill) => skill.name === name);

    // if (name && user && user?.skills && userSkill?.name === name) {
    //   const skills = [...user.skills] || [];

    //   const idx = skills.findIndex((s) => s.name === name);

    //   skills[idx] = state as Skill;

    //   await mutateAsync({ ...user, skills });
    // }

    navigate('/dashboard/skills');
  };

  const handleChangeName = (toolName: string, values: ToolType): void => {
    dispatch({
      type: 'update-tool',
      tool: { ...values, name: toolName },
    });
  };

  const handleChangeLevel = (level: `${Level}`, values: ToolType): void => {
    dispatch({
      type: 'update-tool',
      tool: { ...values, level },
    });
  };

  const handleChangeExperience = (experience: number, values: ToolType): void => {
    dispatch({
      type: 'update-tool',
      tool: { ...values, experience },
    });
  };

  const cancelHandle = (): void => {
    navigate(-1);
  };

  return (
    <SkillContainerStyled>
      <TitleCategory value={name || ''} />
      {tool?.skills?.length ? (
        <>
          <DividerStyled variant="fullWidth" />
          <ToolsContainerStyled>
            {
              tool?.skills.map((skill) => (
                <Skill
                  key={skill.name}
                  skillData={skill}
                  onChangeName={handleChangeName}
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

export default EditTool;
