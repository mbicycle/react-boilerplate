import { memo } from 'react';
import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import { Project } from 'common/models/User';
import { useDeleteProject } from '../lib/query-hooks';
import { useProjectItem } from './tool/hooks';

const ProjectItem = function ({
  title, from, to, id,
}: Project): JSX.Element {
  const { mutateAsync: onDelete, isLoading } = useDeleteProject();
  const { onOpenHandle } = useProjectItem({ id });
  const onDeleteProjectHandle = (): void => {
    onDelete(title);
  };

  return (
    <ProfiencyItem
      headText={title}
      bodyText={`${from} - ${to}`}
      onDelete={onDeleteProjectHandle}
      isLoading={isLoading}
      onClick={onOpenHandle}
    />
  );
};

export default memo(ProjectItem);
