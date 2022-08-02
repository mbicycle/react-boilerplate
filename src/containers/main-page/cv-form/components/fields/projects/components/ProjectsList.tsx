import { Project } from 'common/models/User';
import { memo } from 'react';
import { JsxEmit } from 'typescript';
import ProjectItem from './ProjectItem';

const ProjectsList = function( projects : Project[]): JSX.Element {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          id={project.id}
          title={project.title}
          from={project.from}
          to={project.to}
          categories={project.categories}
          role={project.role}
          link={project.link}
          description={project.description}
          responsibilities={project.responsibilities}
          teamSize={project.teamSize}
        />
      ))}
    </>
  );
}

export default memo(ProjectsList);
