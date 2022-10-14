import { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from 'common/models/User';
import dayjs from 'dayjs';

import { useUserFromDb } from '../../../personal-information/lib/query-hooks';
import { useUpdateProjectById, useUpdateProjects } from '../../lib/query-hooks';
import { ProjectIdContext, useProjectIdContext } from './ProjectContext';

interface ProjectItem {
  isLoading: boolean;
  onOpenHandle: () => void;
  id: string;
}

interface ProjectItemProps {
  id: string;
}

export const useProjectItem = ({ id }: ProjectItemProps): ProjectItem => {
  const navigate = useNavigate();
  const { dispatch: dispatchProjectId } = useProjectIdContext();

  const { isLoading } = useUpdateProjects();

  const onOpenHandle = (): void => {
    dispatchProjectId({ type: 'getIdProject', id });
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
export const useEditProject = (): UpdateProject => {
  const navigate = useNavigate();
  const { data: user } = useUserFromDb();
  const state = useContext(ProjectIdContext);
  const project = user?.projects.find((c) => c.id === state?.state.id);

  const { mutateAsync, isLoading } = useUpdateProjectById();

  const onSaveProjectHandle = (projectValues: Project): void => {
    mutateAsync({
      ...projectValues,
      from: dayjs(projectValues.from).format('DD/MM/YYYY'),
      to: dayjs(projectValues.to).format('DD/MM/YYYY'),
    });
    navigate('/dashboard/projects');
  };

  const cancelHandle = useCallback((): void => {
    navigate('/dashboard/projects');
  }, [navigate]);

  return <UpdateProject>{
    project,
    isLoading,
    cancelHandle,
    onSaveProjectHandle,
  };
};
