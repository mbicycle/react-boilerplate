import { Project } from 'common/models/User';
import { memo } from 'react';
import ProjectItem from './ProjectItem';

const ProjectsList = function (
  { projects }: { projects: Project[] },
): JSX.Element {
  return (
    <>
      {projects.map(({
        id, title, from, to, categories, role, description, link, responsibilities, teamSize,
      }) => (
        <ProjectItem
          key={id}
          title={title}
          from={from}
          to={to}
          categories={categories || []}
          id={id}
          role={role}
          description={description}
          link={link}
          responsibilities={responsibilities}
          teamSize={teamSize}
        />
      ))}
    </>
  );
};

export default memo(ProjectsList);
