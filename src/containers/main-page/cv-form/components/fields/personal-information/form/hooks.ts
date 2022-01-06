import { useEffect } from 'react';

import { useForm } from 'common/utils/hooks';
import { useAuth } from 'containers/authentication/auth';
import { User } from 'containers/authentication/api';

import { Me } from '../lib/models/me';
import { useChangeMe } from '../lib/query-hooks';

interface UpdatePersonalDataReturnType {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  user: User | undefined;
}

export const useUpdatePersonalData = (): UpdatePersonalDataReturnType => {
  const { values, handleChange } = useForm<Me>();
  const { mutateAsync } = useChangeMe();
  const { user } = useAuth();

  useEffect(() => {
    mutateAsync(values as never);
  }, [mutateAsync, values]);

  return {
    handleChange,
    user,
  };
};
