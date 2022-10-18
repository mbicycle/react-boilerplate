import { memo, useMemo } from 'react';
import dayjs from 'dayjs';
import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import { Project } from 'common/models/User';
import { useDeleteProject } from '../lib/query-hooks';
import { useProjectItem } from './tool/hooks';

type ProjectItemProps = Pick<Project, 'title' | 'from' | 'to' | 'id'>;

const ProjectItem = function ({
  title, from, to, id,
}: ProjectItemProps): JSX.Element {
  const { mutateAsync: onDelete, isLoading } = useDeleteProject();
  const { onOpenHandle } = useProjectItem({ id });

  const onDeleteProjectHandle = (): void => {
    onDelete(title);
  };

  const fromTo = useMemo(
    () => `${dayjs(from).format('DD MMMM YYYY')} - ${dayjs(to).format('DD MMMM YYYY')}`,
    [from, to],
  );

  return (
    <ProfiencyItem
      headText={title}
      bodyText={fromTo}
      onDelete={onDeleteProjectHandle}
      isLoading={isLoading}
      onClick={onOpenHandle}
    />
  );
};

export default memo(ProjectItem);
