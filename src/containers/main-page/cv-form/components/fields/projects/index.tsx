import CircularSpinner from 'common/components/circular-spinner/circular-spinner';

import AddProfiency from 'common/components/add-pattern';
import { useUserFromDb } from '../personal-information/lib/query-hooks';
import ProjectsList from './components/ProjectsList';
import { ProjectProvider } from './components/tool/ProjectContext';

const Projects = function (): JSX.Element {
  const { data, isLoading } = useUserFromDb();

  if (isLoading) {
    return <CircularSpinner size="large" color="primary" />;
  }
  return (
    <ProjectProvider>
      <AddProfiency
        collection={data?.projects || []}
        title="Projects"
      >
        {!!data?.projects?.length && <ProjectsList projects={data.projects || []} />}
      </AddProfiency>
    </ProjectProvider>
  );
};

export default Projects;
