import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { Category, Skill } from 'common/models/User';
import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import { useCategoryContext } from 'containers/main-page/cv-form/local-state/hooks';

import { useUserFromDb } from '../../../personal-information/lib/query-hooks';
import { useAddOrEditSkill } from '../../lib/query-hooks';
import { useCategory } from '../skills/utils/hooks';

interface CreateCategory {
  categoryName: string;
  skills: Skill[] | undefined;
  isLoading: boolean;
  cancelHandle: VoidFunction;
  handleCategoryNameChange: (name: string) => void;
  onSaveSkillsHandle: () => Promise<void>;
}

export const useCreateCategory = (): CreateCategory => {
  const navigate = useNavigate();

  const { state: category, dispatch: dispatchCategory } = useCategoryContext();

  const { mutateAsync, isLoading } = useAddOrEditSkill();
  const { data: user } = useUserFromDb();

  const handleCategoryNameChange = useCallback((name: string): void => {
    dispatchCategory({
      type: 'update-category-name',
      category: { ...category, name } as Category,
    });
  }, [category, dispatchCategory]);

  const cancelHandle = (): void => {
    navigate(-1);
  };

  const onSaveSkillsHandle = useCallback(async (): Promise<void> => {
    const copy = { ...category, id: uuidv4() };

    if (copy.id && user && copy?.id !== category.id) {
      const categories = user?.categories || [];

      await mutateAsync({
        ...user,
        categories: [...categories, copy as Category],
      });

      navigate('/dashboard/skills');
    } else {
      SnackBarUtils.warning('The skill is already exists. Please change the name.');
    }
  }, [category, mutateAsync, navigate, user]);

  return {
    categoryName: category.name || '',
    skills: category.skills,
    isLoading,
    cancelHandle,
    handleCategoryNameChange,
    onSaveSkillsHandle,
  };
};

interface UpdateCategory {
  category: Category;
  isLoading: boolean;
  cancelHandle: VoidFunction;
  onSaveCategoryHandle: () => Promise<void>;
  handleCategoryNameChange: (name: string) => void;
}

export const useUpdateCategory = (): UpdateCategory => {
  const navigate = useNavigate();
  const { category } = useCategory();
  const { data: user } = useUserFromDb();
  const { dispatch: dispatchCategory } = useCategoryContext();

  const { mutateAsync, isLoading } = useAddOrEditSkill();

  const onSaveCategoryHandle = useCallback(async (): Promise<void> => {
    const userCategory = user?.categories?.find((c) => c.id === category.id);

    if (category.id && user && user?.categories && userCategory?.id === category.id) {
      const categories = [...user.categories] || [];
      const idx = categories.findIndex((s) => s.id === category.id);
      categories[idx] = category as Category;

      await mutateAsync({ ...user, categories });
    }

    navigate('/dashboard/skills');
  }, [category, mutateAsync, navigate, user]);

  const handleCategoryNameChange = useCallback((name: string): void => {
    dispatchCategory({ type: 'update-category-name', category: { ...category, name } });
  }, [category, dispatchCategory]);

  const cancelHandle = useCallback((): void => {
    navigate(-1);
  }, [navigate]);

  return {
    category,
    isLoading,
    cancelHandle,
    onSaveCategoryHandle,
    handleCategoryNameChange,
  };
};
