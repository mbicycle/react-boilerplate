import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';

import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import { Language } from 'common/models/Language';
import { UserLanguage } from 'common/models/UserLanguage';

import * as api from './api';
import { QueryKey } from './query-key';
import { FormLanguage } from '../components/utils/types';

export function useGetAllLanguages(): UseQueryResult<Language[], Error> {
  const queryClient = useQueryClient();
  const myLanguages = queryClient.getQueryData([QueryKey.MyLanguages]) as UserLanguage[];

  return useQuery<Language[], Error, Language[], QueryKey.Languages>(
    QueryKey.Languages,
    api.getAllLanguages,
    {
      onSettled: (data) => {
        if (myLanguages?.length && data) {
          const filteredBySelectedByUserLanguages = data.filter(
            (language) => myLanguages.every(
              (myLanguage) => myLanguage.name !== language.name,
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

export function useCreateLanguage(): UseMutationResult<Language, Error, string, unknown> {
  const queryClient = useQueryClient();

  return useMutation<Language, Error, string, VoidFunction>(
    (language: Language | unknown) => api.cretateLanguage(language as Language),
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.Languages);
      },
      onError: (error: Error, _: string, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}

export function useGetUserLanguages(): UseQueryResult<UserLanguage[], Error> {
  const queryClient = useQueryClient();

  return useQuery<UserLanguage[], Error, UserLanguage[], QueryKey.MyLanguages>(
    QueryKey.MyLanguages,
    api.getUserLanguages,
    {
      initialData: () => queryClient.getQueryData(QueryKey.MyLanguages),

      onError: (error: Error) => {
        SnackBarUtils.error(`${error.message}.`);
      },
    },
  );
}

export function useAddUserLanguage(): UseMutationResult<FormLanguage, Error, string, unknown> {
  const queryClient = useQueryClient();

  return useMutation<FormLanguage, Error, string, VoidFunction>(
    (language: unknown) => {
      const lng = language as FormLanguage;

      return api.addUserLanguage(lng);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.MyLanguages);
      },
      onError: (error: Error, _: string, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}

export function useDeleteUserLanguage(): UseMutationResult<FormLanguage, Error, string, unknown> {
  const queryClient = useQueryClient();

  return useMutation<FormLanguage, Error, string, VoidFunction>(
    (id: string) => api.deleteUserLanguage(id),
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.MyLanguages);
      },
      onError: (error: Error, _: string, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}
