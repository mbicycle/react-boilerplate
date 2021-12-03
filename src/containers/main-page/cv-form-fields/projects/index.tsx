import React from 'react';

interface ProjectsProps {
    value: { [key: string]: string };
}

const Projects = function ({ value }: ProjectsProps): JSX.Element {
  return (
    <div>
      Projects Form parts
    </div>
  );
};

export default Projects;
