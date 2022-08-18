import { memo } from 'react';
import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import { Project } from 'common/models/User';
import { useDeleteProject } from '../lib/query-hooks';

const ProjectItem = function ({
  title, from, to,
}: Project): JSX.Element {
  const { mutateAsync: onDelete, isLoading } = useDeleteProject();
  const onDeleteProjectHandle = (): void => {
    onDelete(title);
  };

  return (
    <ProfiencyItem
      headText={title}
      bodyText={`${from} - ${to}`}
      onDelete={onDeleteProjectHandle}
      isLoading={isLoading}
    />
  );
};

export default memo(ProjectItem);
