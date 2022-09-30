import React, {
  FC, useMemo, useReducer, useContext,
} from 'react';

export type ProjectIdAction = { type: 'getIdProject', id: string | null; };
export type ProjectIdState = { id: string | null; };
export type ProjectIdDispatch = (action: ProjectIdAction) => void;
export type ProjectIdContextType = { state: ProjectIdState; dispatch: ProjectIdDispatch; };

export const ProjectIdContext = React.createContext<{
  state: ProjectIdState,
  dispatch: ProjectIdDispatch;
} | undefined>(undefined);

export const projectEditReducer = (state: ProjectIdState, action: ProjectIdAction): ProjectIdState => {
  const projectId = { ...state };
  if (action.type === 'getIdProject') {
    projectId.id = action.id;
  } else {
    projectId.id = null;
  }
  return projectId;
};

export const ProjectProvider: FC = function ({ children }): JSX.Element {
  const [projectIdState, projectIdDispatch] = useReducer(projectEditReducer, { id: null });
  const projectContextValue = useMemo(() => ({
    state: projectIdState,
    dispatch: projectIdDispatch,
  }), [projectIdState]);

  return (
    <ProjectIdContext.Provider value={projectContextValue}>
      {children}
    </ProjectIdContext.Provider>
  );
};

export function useProjectIdContext(): ProjectIdContextType {
  console.log('I m from useProjectId context');
  const context = useContext(ProjectIdContext);
  if (context === undefined) {
    throw new Error('ProjectNameContext must be used within a ProjectProvider');
  }
  return context;
}
