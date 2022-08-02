import { memo } from 'react';
import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import dayjs from 'dayjs';
import { string } from 'yup';
import { Project } from 'common/models/User';

type ItemProps = {
  id: string;
  title: string;
  from: string;
  to: string;
};
const ProjectItem = function (project: Project): JSX.Element {
  const onDeleteHandle = (): void => {
    console.log('delete');
  }

  return (
          <ProfiencyItem
            headText={project.title}
            bodyText={project.from  ? dayjs(project.from).format('DD.MM.YYYY') : ''}
            onDelete={onDeleteHandle}
          />
        )
}

export default memo(ProjectItem);
