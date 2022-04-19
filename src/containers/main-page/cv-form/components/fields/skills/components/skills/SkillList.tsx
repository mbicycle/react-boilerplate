import { memo } from 'react';

import { Skill } from 'common/models/User';

import SkillItem from './SkillItem';

const SkillList = function ({ skills }: {skills: Skill[]}) : JSX.Element | null {
  return (
    <>
      {skills.map(({ tools, name }) => (
        <SkillItem
          key={name}
          category={name}
          tools={tools || []}
          id={name}
        />
      ))}
    </>
  );
};

export default memo(SkillList);
