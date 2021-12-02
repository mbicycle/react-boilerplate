import React from 'react';

interface SkillsProps {
    value: { [key: string]: string };
}

const Skills = function ({ value }: SkillsProps): JSX.Element {
  return (
    <div>
      Skills Form part
      {value}
    </div>
  );
};

export default Skills;
