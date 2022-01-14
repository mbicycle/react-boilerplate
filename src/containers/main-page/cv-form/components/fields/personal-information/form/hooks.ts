import { useEffect } from 'react';

import { useForm } from 'common/utils/hooks';
import { Me } from 'common/models/Me';
import { User } from 'common/models/User';
import { useAuth } from 'containers/authentication/auth';

import { useUpdateMe } from '../lib/query-hooks';

interface UpdatePersonalDataReturnType {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  user: User | undefined;
}

export const useUpdatePersonalData = (): UpdatePersonalDataReturnType => {
  const { values, handleChange } = useForm<Me>();
  const { mutateAsync } = useUpdateMe();
  const { user } = useAuth();

  useEffect(() => {
    mutateAsync(values as never);
  }, [mutateAsync, values]);

  return {
    handleChange,
    user,
  };
};
