import { SelectChangeEvent } from '@mui/material';
import { useDebouncedFn } from 'beautiful-react-hooks';
import type { Category, DbUser, Skill } from 'common/models/User';
import {
  useUserFromDb,
} from 'containers/main-page/cv-form/components/fields/personal-information/lib/query-hooks';
import { useCategoryIdContext } from 'containers/main-page/cv-form/local-state/hooks';
import { useState } from 'react';

type UseFormPropsReturnType<T> = {
  values: T,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange: (e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent<string> | any) => void;
};

export const useForm = <T>(initialValues?: T): UseFormPropsReturnType<T> => {
  const [values, setValues] = useState<T>(initialValues as T);

  const handleChange = useDebouncedFn((e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === 'true' || e.target.value === 'false') {
      setValues((v) => (
        { ...v, [e.target.name]: e.target.value === 'false' }
      ));
    } else {
      setValues((v) => ({ ...v, [e.target.name]: e.target.value?.trim() }));
    }
  }, 300);

  return {
    values,
    handleChange,
  };
};

type Props = {
  skillName: string;
  data: Category;
  user: DbUser;
};

export function useGetCategoryByName(): Props {
  const { state: { id: name } } = useCategoryIdContext();
  const { data: user } = useUserFromDb();

  const skill = user?.categories?.find((c) => c.name === name);

  return {
    skillName: skill?.name as string,
    data: skill || {} as Category,
    user: user || {} as DbUser,
  };
}
