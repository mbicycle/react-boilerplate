import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';
import { Tool } from 'common/models/User';

import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import { useUserFromDb } from '../../../personal-information/lib/query-hooks';
import { useAddOrEditSkill } from '../../lib/query-hooks';
import { Level } from '../../../languages/components/utils/level.enum';

interface SaveSkill {
  skillName: string;
  tools: Tool[] | undefined;
  isLoading: boolean;
  cancelHandle: VoidFunction;
  handleSkillNameChange: (name: string) => void;
  onSaveToolsHandle: () => Promise<void>;
}

export const useSaveSkill = (): SaveSkill => {
  const navigate = useNavigate();

  const { state: { tools } } = useSkillContext();

  const { mutateAsync, isLoading } = useAddOrEditSkill();
  const { data: user } = useUserFromDb();

  const [skillName, setSkillName] = useState('');

  const handleSkillNameChange = useCallback((name: string): void => {
    setSkillName(name);
  }, []);

  const cancelHandle = (): void => {
    navigate(-1);
  };

  const onSaveToolsHandle = useCallback(async (): Promise<void> => {
    // const userSkill = user?.skills?.find((skill) => skill.name === skillName);

    // if (skillName && user && userSkill?.name !== skillName) {
    //   const skills = user?.skills || [];
    //   await mutateAsync({
    //     ...user,
    //     skills: [
    //       ...skills,
    //       {
    //         name: skillName || '',
    //         tools: tools || [],
    //       },
    //     ],
    //   });

    //   navigate('/dashboard/skills');
    // } else {
    //   SnackBarUtils.warning('The skill is already exists. Please change the name.');
    // }
  }, [mutateAsync, navigate, skillName, tools, user]);

  return {
    skillName,
    tools,
    isLoading,
    cancelHandle,
    handleSkillNameChange,
    onSaveToolsHandle,
  };
};

interface CreateSkill {
  readonly handleChangeLevel: (level: `${Level}`, values: Tool) => void;
  readonly handleChangeExperience: (experience: number, values: Tool) => void;
  readonly handleToolNameChange: (toolName: string, values: Tool) => void;
}

export const useCreateSkill = (): CreateSkill => {
  const { dispatch } = useSkillContext();
  const handleChangeLevel = (level: `${Level}`, values: Tool): void => {
    dispatch({
      type: 'update-tool',
      tool: { ...values, level },
    });
  };

  const handleChangeExperience = (experience: number, values: Tool): void => {
    dispatch({
      type: 'update-tool',
      tool: { ...values, experience },
    });
  };

  const handleToolNameChange = (toolName: string, values: Tool): void => {
    dispatch({
      type: 'update-tool',
      tool: { ...values, name: toolName },
    });
  };

  return {
    handleChangeLevel,
    handleChangeExperience,
    handleToolNameChange,
  };
};
