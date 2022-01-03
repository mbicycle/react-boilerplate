import { memo } from 'react';

import { SkillCollectionState } from 'containers/main-page/cv-form/local-state/SkillCollectionContext';

import SkillItem from './SkillItem';

const SkillList = function ({ skills }: {skills: SkillCollectionState}) : JSX.Element {
  return (
    <>
      {skills.map(({ category, tools }) => (
        <SkillItem
          key={category}
          category={category}
          tools={tools}
        />
      ))}
    </>
  );
};

export default memo(SkillList);
