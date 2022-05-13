import { useNavigate } from 'react-router-dom';

import { useSkillContext, useSkillNameContext } from 'containers/main-page/cv-form/local-state/hooks';

import type { Skill, Tool } from 'common/models/User';
import { useUserFromDb } from '../../../../personal-information/lib/query-hooks';
import { useAddOrEditSkill } from '../../../lib/query-hooks';

interface SkillItemProps {
  id: string;
  name: string;
  skills: Tool[];
}

interface SkillItem {
  isLoading: boolean;
  onDeleteToolHandle: () => Promise<void>;
  openHandle: VoidFunction;
}

export const useSkillItem = ({ id, name, skills: tools }: SkillItemProps): SkillItem => {
  const navigate = useNavigate();

  const { dispatch: dispatchSkillName } = useSkillNameContext();
  const { dispatch: dispatchSkill } = useSkillContext();

  const { data: user } = useUserFromDb();
  const { mutateAsync, isLoading } = useAddOrEditSkill();

  const onDeleteToolHandlee = async (): Promise<void> => {
    const skillToRemove = user?.categories?.find((category) => category.name === name);

    if (user && skillToRemove) {
      await mutateAsync(
        { ...user, categories: user.categories.filter((category) => category !== skillToRemove) },
      );
    }
  };

  const openHandle = (): void => {
    dispatchSkillName({ type: 'set', name });
    dispatchSkill({ type: 'set-edit-skill', skill: { name, tools, id } });
    navigate('edit');
  };

  return {
    isLoading,
    onDeleteToolHandle: onDeleteToolHandlee,
    openHandle,
  };
};

interface CategoryItemProps {
  id: string;
  name: string;
  skills: Skill[];
}

export const useCategoryItem = ({ id, name, skills }: CategoryItemProps): SkillItem => {
  const navigate = useNavigate();

  const { dispatch: dispatchSkillName } = useSkillNameContext();
  const { dispatch: dispatchSkill } = useSkillContext();

  const { data: user } = useUserFromDb();
  const { mutateAsync, isLoading } = useAddOrEditSkill();

  const onDeleteToolHandlee = async (): Promise<void> => {
    const skillToRemove = user?.categories?.find((category) => category.id === id);

    if (user && skillToRemove) {
      await mutateAsync(
        { ...user, categories: user.categories.filter((category) => category !== skillToRemove) },
      );
    }
  };

  const openHandle = (): void => {
    dispatchSkillName({ type: 'set', name });
    // dispatchSkill({ type: 'set-edit-skill', skill: { name, tools: skills, id } });
    navigate('edit');
  };

  return {
    isLoading,
    onDeleteToolHandle: onDeleteToolHandlee,
    openHandle,
  };
};
