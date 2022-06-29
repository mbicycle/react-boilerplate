import { useEffect } from 'react';

import { useForm } from 'common/utils/hooks';
import { DbUser, MsUser } from 'common/models/User';
import { useAuth } from 'containers/authentication/auth';
import { useUserFromDb, useUpdateUserFromDb } from '../lib/query-hooks';

interface UpdatePersonalDataReturnType {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  user?: MsUser;
  dbUser?: DbUser;
}

export const useUpdatePersonalData = (): UpdatePersonalDataReturnType => {
  const { values, handleChange } = useForm<DbUser>();
  const { mutateAsync } = useUpdateUserFromDb();
  const { user } = useAuth();
  const { data: dbUser, refetch } = useUserFromDb();

  useEffect(() => {
    if (dbUser?.email) {
      mutateAsync({ ...dbUser, ...values } as never);
    }
  }, [dbUser, mutateAsync, values]);

  useEffect(() => {
    if (!dbUser) {
      refetch();
    }
  }, [dbUser, refetch]);

  return {
    handleChange,
    dbUser,
    user,
  };
};
