import { useNavigate } from 'react-router-dom';

import { useSkillContext, useSkillNameContext } from 'containers/main-page/cv-form/local-state/hooks';

import type { Tool } from 'common/models/User';
import { useUserFromDb } from '../../../../personal-information/lib/query-hooks';
import { useAddOrEditSkill } from '../../../lib/query-hooks';

interface SkillItemProps {
  name: string;
  tools: Tool[];
}

interface SkillItem {
  isLoading: boolean;
  onDeleteToolHandlee: () => Promise<void>;
  openHandle: VoidFunction;
}

export const useSkillItem = ({ name, tools }: SkillItemProps): SkillItem => {
  const navigate = useNavigate();

  const { dispatch: dispatchSkillName } = useSkillNameContext();
  const { dispatch: dispatchSkill } = useSkillContext();

  const { data: user } = useUserFromDb();
  const { mutateAsync, isLoading } = useAddOrEditSkill();

  const onDeleteToolHandlee = async (): Promise<void> => {
    const skillToRemove = user?.skills?.find((skill) => skill.name === name);

    if (user && skillToRemove) {
      await mutateAsync({ ...user, skills: user.skills.filter((skill) => skill !== skillToRemove) });
    }
  };

  const openHandle = (): void => {
    dispatchSkillName({ type: 'set', name });
    dispatchSkill({ type: 'set-edit-skill', skill: { name, tools } });
    navigate('edit');
  };

  return {
    isLoading,
    onDeleteToolHandlee,
    openHandle,
  };
};
