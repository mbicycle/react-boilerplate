import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';

import { Tool } from 'common/models/User';
import { useUserFromDb } from '../../../personal-information/lib/query-hooks';
import { useAddOrEditSkill } from '../../lib/query-hooks';

interface SaveSkill {
  skillName: string;
  tools: Tool[] | undefined;
  isLoading: boolean;
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

  const onSaveToolsHandle = useCallback(async (): Promise<void> => {
    const userSkill = user?.skills?.find((skill) => skill.name === skillName);

    if (skillName && user && userSkill?.name !== skillName) {
      const skills = user?.skills || [];

      await mutateAsync({
        ...user,
        skills: [
          ...skills,
          {
            name: skillName || '',
            tools: tools || [],
          },
        ],
      });
    }

    navigate('/dashboard/skills');
  }, [mutateAsync, navigate, skillName, tools, user]);

  return {
    skillName,
    tools,
    isLoading,
    handleSkillNameChange,
    onSaveToolsHandle,
  };
};
