import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query';
import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import { Skill } from 'common/models/Skill';

import { QueryKey } from './query-key';

import * as api from './api';

export function useGetAllSkills(): UseQueryResult<Skill[], Error> {
  const queryClient = useQueryClient();

  return useQuery<Skill[], Error, Skill[], QueryKey.MySkills>(
    QueryKey.MySkills,
    api.getMySkills,
    {
      initialData: () => queryClient.getQueryData(QueryKey.MySkills),

      onError: (error: Error) => {
        SnackBarUtils.error(`${error.message}.`);
      },
      notifyOnChangePropsExclusions: ['isFetching'],
      notifyOnChangeProps: ['data', 'error'],
      optimisticResults: true,
    },
  );
}

export function useGetSkillBy(id: string): UseQueryResult<Skill, Error> {
  const queryClient = useQueryClient();

  return useQuery<Skill, Error, Skill, [QueryKey.Skill, string]>(
    [QueryKey.Skill, id],
    (param) => api.getSkillBy(param.queryKey[1] as string),
    {
      initialData: () => queryClient.getQueryData([QueryKey.Skill, id]),

      onError: (error: Error) => {
        SnackBarUtils.error(`${error.message}.`);
      },
      notifyOnChangePropsExclusions: ['isFetching'],
      notifyOnChangeProps: ['data', 'error'],
      optimisticResults: true,
    },
  );
}

export function useAddOrEditSkill(): UseMutationResult<Skill, Error, Skill, unknown> {
  const queryClient = useQueryClient();

  return useMutation<Skill, Error, Skill, unknown>(
    (data) => api.putSkill(data),
    {
      onMutate: () => {
        queryClient.invalidateQueries(QueryKey.MySkills);
      },
      onError: (error: Error) => {
        SnackBarUtils.error(`${error.message}.`);
      },
    },
  );
}
