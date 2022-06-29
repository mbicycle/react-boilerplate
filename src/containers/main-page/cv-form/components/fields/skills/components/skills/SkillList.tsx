import { memo } from 'react';

import { Skill } from 'common/models/User';

import SkillItem from './SkillItem';

const SkillList = function ({ skills }: {skills: Skill[]}) : JSX.Element | null {
  return (
    <>
      {skills.map(({ id, tools, name }) => (
        <SkillItem
          key={id}
          id={id}
          name={name}
          tools={tools || []}
        />
      ))}
    </>
  );
};

export default memo(SkillList);
