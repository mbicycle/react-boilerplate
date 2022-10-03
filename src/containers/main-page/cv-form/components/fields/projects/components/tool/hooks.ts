import React, { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from 'common/models/User';

import { useUserFromDb } from '../../../personal-information/lib/query-hooks';
import { useUpdateProjects } from '../../lib/query-hooks';
import { ProjectIdContext, useProjectIdContext } from './ProjectContext';
// import {  } from '../../components/project'
// import { useGetCategoryByName } from 'common/utils/hooks';

interface ProjectItem {
  isLoading: boolean;
  onOpenHandle: any;
  id: string;
}

interface ProjectItemProps {
  id: string;
}

export const useProjectItem = ({ id }: ProjectItemProps): ProjectItem => {
  const navigate = useNavigate();
  const { dispatch: dispatchProjectId } = useProjectIdContext();

  const { data: user } = useUserFromDb();
  const { mutateAsync, isLoading } = useUpdateProjects();

  const onOpenHandle = (): void => {
    dispatchProjectId({ type: 'getIdProject', id });
    // console.log('From useProjectItem openHandle', id);
    navigate('edit');
  };

  return {
    id,
    isLoading,
    onOpenHandle,
  };
};

interface UpdateProject {
  project: Project | undefined;
  isLoading: boolean;
  cancelHandle: VoidFunction;
  onSaveProjectHandle: () => Promise<void>;
}
// like useUpdateCategory
export const useUpdateProjectById = (): UpdateProject => {
  const navigate = useNavigate();
  const { data: user } = useUserFromDb();
  const state = useContext(ProjectIdContext);
  const project = user?.projects.find((c) => c.id === state?.state.id);
  console.log(project);

  const { mutateAsync, isLoading } = useUpdateProjects();
  const onSaveProjectHandle = useCallback(async (): Promise<void> => {
    const userProject = user?.projects?.find((p) => p.id);

    // if (id && user && user?.projects && userProject?.id === id) {
    //   const projects = [...user.projects] || [];
    //   const idx = projects.findIndex((s) => s.id === id);
    //   projects[idx] = project as Project;

    //   await mutateAsync({ ...user, projects as Project[] });
    // }

    navigate('/dashboard/projects');
  }, [project, mutateAsync, navigate, user]);

  const cancelHandle = useCallback((): void => {
    navigate('/dashboard/projects');
  }, [navigate]);

  return {
    project,
    isLoading,
    cancelHandle,
    onSaveProjectHandle,
  };
};