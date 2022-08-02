import { Project } from 'common/models/User';
import { memo } from 'react';
import { JsxEmit } from 'typescript';
import ProjectItem from './ProjectItem';

const ProjectsList: React.FC<Project[]> = function( projects : Project[]): JSX.Element {
  return (
    <>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </>
  );
}

export default memo(ProjectsList);
