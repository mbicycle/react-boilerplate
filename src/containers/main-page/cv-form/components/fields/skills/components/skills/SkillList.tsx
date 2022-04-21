import { memo } from 'react';

import { Skill } from 'common/models/User';

import SkillItem from './SkillItem';

const SkillList = function ({ skills }: {skills: Skill[]}) : JSX.Element | null {
  return (
    <>
      {skills.map(({ tools, name }) => (
        <SkillItem
          key={name}
          name={name}
          tools={tools || []}
        />
      ))}
    </>
  );
};

export default memo(SkillList);
