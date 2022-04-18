import { memo } from 'react';

import { Skill } from 'common/models/Skill';

import SkillItem from './SkillItem';

const SkillList = function ({ skills }: {skills: Skill[]}) : JSX.Element | null {
  return (
    <>
      {skills.map(({ category, tools, _id }) => (
        <SkillItem
          key={category}
          category={category}
          tools={tools || []}
          id={_id}
        />
      ))}
    </>
  );
};

export default memo(SkillList);
