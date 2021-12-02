import React from 'react';

interface ProjectsProps {
    value: { [key: string]: string };
}

const Projects = function ({ value }: ProjectsProps): JSX.Element {
  return (
    <div>
      Projects Form part
      {value}
    </div>
  );
};

export default Projects;
