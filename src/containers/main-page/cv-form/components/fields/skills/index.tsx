import { memo } from 'react';

import { useSkillCollectionContext } from 'containers/main-page/cv-form/local-state/hooks';
import AddProfiency from 'common/components/add-pattern';

import SkillList from './components/skills/SkillList';

const Skills = function (): JSX.Element {
  const { state: skills } = useSkillCollectionContext();

  return (
    <AddProfiency
      collection={skills}
      title="Skill"
    >
      {
        skills.length
          ? <SkillList skills={skills} />
          : null
      }
    </AddProfiency>
  );
};

export default memo(Skills);
