import CircularSpinner from 'common/components/circular-spinner/circular-spinner';

import AddProfiency from 'common/components/add-pattern';
import { useUserFromDb } from '../personal-information/lib/query-hooks';
import ProjectsList from './components/ProjectsList';

const Projects = function (): JSX.Element {
  const { data, isLoading } = useUserFromDb();

  if (isLoading) {
    return <CircularSpinner size="large" color="primary" />;
  }

  return (
    <AddProfiency
      collection={data?.projects || []}
      title="Projects"
    >
      {!!data?.projects?.length && <ProjectsList projects={ data?.projects || [] } />}
    </AddProfiency>
  );
};

export default Projects;
