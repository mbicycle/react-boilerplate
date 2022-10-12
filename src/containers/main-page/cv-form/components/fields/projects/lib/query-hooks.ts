import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from 'react-query';

import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';

import {
  DbUser, Project,
} from 'common/models/User';
import * as api from './api';
import { QueryKey } from './query-key';
import { useUserFromDb } from '../../personal-information/lib/query-hooks';

export function useUpdateProjects(): UseMutationResult<DbUser, Error, Project, VoidFunction> {
  const queryClient = useQueryClient();
  const { data: user } = useUserFromDb();
  const projects = user?.projects || [];

  return useMutation<DbUser, Error, Project, VoidFunction>(
    (project: Project) => {
      projects.push(project as Project);
      return api.updateUserProjects(projects as Project[], user as DbUser);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.DbUser);
      },
      onError: (error: Error, _: Project, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}

export function useUpdateProjectById(): UseMutationResult<DbUser, Error, Project, VoidFunction> {
  const queryClient = useQueryClient();
  const { data: user } = useUserFromDb();
  const projects = user?.projects || [];

  return useMutation<DbUser, Error, Project, VoidFunction>(
    (project: Project) => {
      const idx = projects.findIndex((p) => p.id === project.id);
      if (idx) projects[idx] = project;
      else projects.push(project);
      return api.updateUserProjects(projects as Project[], user as DbUser);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(QueryKey.DbUser);
      },
      onError: (error: Error, _: Project, rollback) => {
        SnackBarUtils.error(error.message);

        if (rollback) rollback();
      },
    },
  );
}

export function useDeleteProject(): UseMutationResult<DbUser, Error, string, unknown> {
  const queryClient = useQueryClient();
  const { data: user } = useUserFromDb();
  return useMutation<DbUser, Error, string, VoidFunction>(
    (title: string) => {
      const projects = user?.projects;
      const filteredProjects = (
        projects?.filter((project: Project) => project.title !== title)
      );

      return api.updateUserProjects(filteredProjects as Project[], user as DbUser);
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
