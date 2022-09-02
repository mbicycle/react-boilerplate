import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from 'common/models/User';

import { useUserFromDb } from '../../../personal-information/lib/query-hooks';
import { useUpdateProjects } from '../../lib/query-hooks';

export type ProjectNameAction = { type: 'set' | 'reset', id: string | null; };
export type ProjectNameState = { id: string | null; };
export type ProjectNameDispatch = (action: ProjectNameAction) => void;
export type ProjectNameContextType = { state: ProjectNameState; dispatch: ProjectNameDispatch; };

export const ProjectByIdContext = React.createContext<{
  state: ProjectNameState,
  dispatch: ProjectNameDispatch;
} | undefined>(undefined);

export function useProjectIdContext(): ProjectNameContextType {
  const context = useContext(ProjectByIdContext);

  if (context === undefined) {
    throw new Error('ProjectNameContext must be used within a CvFormProvider');
  }

  return context;
}

interface ProjectItem {
  isLoading: boolean;
  // onDeleteProjectHandle: () => Promise<void>;
  openHandle: VoidFunction;
}

interface ProjectItemProps {
  id: string;
}

export const useProjectItem = ({ id }: ProjectItemProps): ProjectItem => {
  console.log(id);

  const navigate = useNavigate();

  // const { dispatch: dispatchProjectId } = useProjectIdContext();

  const { data: user } = useUserFromDb();
  const { mutateAsync, isLoading } = useUpdateProjects();

  // const onDeleteProjectHandle = async (): Promise<void> => {
  //   const projectToRemove = user?.projects?.find((project) => project.id === id);

  //   if (user && projectToRemove) {
  //     await mutateAsync(
  //       { ...user, projects: user.projects.filter((project) => project !== projectToRemove) },
  //     );
  //   }
  // };

  const openHandle = (): void => {
    // dispatchProjectId({ type: 'set', id });
    console.log('From useProjectItem openHandle', id);
    navigate('edit');
  };

  return {
    isLoading,
    // onDeleteProjectHandle,
    openHandle,
  };
};
