import { Project } from 'common/models/User';
import { memo } from 'react';
import ProjectItem from './ProjectItem';

const ProjectsList = function (
  { projects }: { projects: Project[]; },
): JSX.Element {
  return (
    <>
      {projects.map(({
        id, title, from, to,
      }) => (
        <ProjectItem
          key={`${id}_${title}`}
          title={title}
          from={from}
          to={to}
          id={id}
        />
      ))}
    </>
  );
};

export default memo(ProjectsList);
