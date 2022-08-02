import { memo } from 'react';
import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import dayjs from 'dayjs';
import { Category, Project } from 'common/models/User';

interface ProjectItemProps extends Project {
  id: string;
  title: string;
  from: string;
  to: string;
  categories: Category[];
}

const ProjectItem = function ({
  title, from, to, categories, id,
}: Project): JSX.Element {
  const date = dayjs(from).format('MMM YYYY');
  const toDate = dayjs(to).format('MMM YYYY');
  const onDelete = (): void => {
    console.log('I m from ProjectItem Delete');
  };
  return (
    <ProfiencyItem
      headText={title}
      bodyText={`${date} - ${toDate}`}
      onDelete={onDelete}
    />
  );
};

export default memo(ProjectItem);
