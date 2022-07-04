import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';

import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';

import { DbUser, UserLanguage } from 'common/models/User';
import { Languages } from 'common/models/Language.model';
import * as api from './api';
import { QueryKey } from './query-key';
import { useUserFromDb } from '../../personal-information/lib/query-hooks';

export function useGetAllLanguages(): UseQueryResult<Languages, Error> {
  const queryClient = useQueryClient();

  const { data: user } = useUserFromDb();
  const languages = user?.languages || [];
  return useQuery<Languages, Error, Languages, QueryKey.Languages>(
    QueryKey.Languages,
    api.getAllLanguages,
    {
      onSettled: (data) => {
        if (languages?.length && data) {
          const filteredBySelectedByUserLanguages = data.filter(
            (language) => languages.every(
              (myLanguage) => myLanguage.name !== language,
            ),
          );
          queryClient.setQueryData(QueryKey.Languages, filteredBySelectedByUserLanguages);

          return filteredBySelectedByUserLanguages;
        }

        return data;
      },
      initialData: () => queryClient.getQueryData(QueryKey.Languages),

      onError: (error: Error) => {
        SnackBarUtils.error(`${error.message}.`);
      },
      notifyOnChangePropsExclusions: ['isFetching'],
      notifyOnChangeProps: ['data', 'error'],
      optimisticResults: true,
    },
  );
}

export function useAddUserLanguage(): UseMutationResult<DbUser, Error, UserLanguage, VoidFunction> {
  const queryClient = useQueryClient();
  const { data: user } = useUserFromDb();

  const languages = user?.languages || [];
  debugger;
  return useMutation<DbUser, Error, UserLanguage, VoidFunction>(
    (language: UserLanguage) => {
      languages?.push(language as UserLanguage);
      debugger;
      return api.modifyUserLanguages(languages as UserLanguage[], user as DbUser);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.DbUser);
      },
      onError: (error: Error, _: UserLanguage, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}

export function useDeleteUserLanguage(): UseMutationResult<DbUser, Error, string, unknown> {
  const queryClient = useQueryClient();
  const { data: user } = useUserFromDb();

  return useMutation<DbUser, Error, string, VoidFunction>(
    (name: string) => {
      const languages = user?.languages;
      const filteredLanguages = languages?.filter((language: UserLanguage) => language.name !== name);

      return api.modifyUserLanguages(filteredLanguages as UserLanguage[], user as DbUser);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.DbUser);
      },
      onError: (error: Error, _: string, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}
