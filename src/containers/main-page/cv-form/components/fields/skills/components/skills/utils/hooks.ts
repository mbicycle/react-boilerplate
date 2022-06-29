import { useNavigate } from 'react-router-dom';

import { useCategoryContext, useCategoryIdContext } from 'containers/main-page/cv-form/local-state/hooks';

import type { Category, Skill } from 'common/models/User';
import { useEffect } from 'react';
import { useGetCategoryByName } from 'common/utils/hooks';
import { useUserFromDb } from '../../../../personal-information/lib/query-hooks';
import { useAddOrEditSkill } from '../../../lib/query-hooks';

interface SkillItem {
  isLoading: boolean;
  onDeleteToolHandle: () => Promise<void>;
  openHandle: VoidFunction;
}

export const useSkillItem = ({ id }: { id: string; }): SkillItem => {
  const navigate = useNavigate();

  const { dispatch: dispatchCategoryName } = useCategoryIdContext();

  const { data: user } = useUserFromDb();
  const { mutateAsync, isLoading } = useAddOrEditSkill();

  const onDeleteToolHandle = async (): Promise<void> => {
    const skillToRemove = user?.categories?.find((category) => category.id === id);

    if (user && skillToRemove) {
      await mutateAsync(
        { ...user, categories: user.categories.filter((category) => category !== skillToRemove) },
      );
    }
  };

  const openHandle = (): void => {
    dispatchCategoryName({ type: 'set', id });
    navigate('edit');
  };

  return {
    isLoading,
    onDeleteToolHandle,
    openHandle,
  };
};

interface CategoryItemProps {
  id: string;
  skills: Skill[];
}

export const useCategoryItem = ({ id }: CategoryItemProps): SkillItem => {
  const navigate = useNavigate();

  const { dispatch: dispatchCategoryId } = useCategoryIdContext();

  const { data: user } = useUserFromDb();
  const { mutateAsync, isLoading } = useAddOrEditSkill();

  const onDeleteToolHandle = async (): Promise<void> => {
    const skillToRemove = user?.categories?.find((category) => category.id === id);

    if (user && skillToRemove) {
      await mutateAsync(
        { ...user, categories: user.categories.filter((category) => category !== skillToRemove) },
      );
    }
  };

  const openHandle = (): void => {
    dispatchCategoryId({ type: 'set', id });
    navigate('edit');
  };

  return {
    isLoading,
    onDeleteToolHandle,
    openHandle,
  };
};

export const useCategory = (): { category: Category; } => {
  const { user } = useGetCategoryByName();
  const { state: { id: categoryId } } = useCategoryIdContext();
  const { state: categoryState, dispatch: dispatchCategory } = useCategoryContext();

  const category = user.categories.find((c) => c.id === categoryId);

  useEffect(() => {
    dispatchCategory({ type: 'set-category', category });
  }, [category, dispatchCategory]);

  return {
    category: categoryState as Category,
  };
};
