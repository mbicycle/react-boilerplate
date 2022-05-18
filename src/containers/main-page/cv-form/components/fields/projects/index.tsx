import CircularSpinner from 'common/components/circular-spinner/circular-spinner';

import AddProfiency from 'common/components/add-pattern';
import { useUserFromDb } from '../personal-information/lib/query-hooks';

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
      {!!data?.projects?.length && <div />}
    </AddProfiency>
  );
};

export default Projects;
