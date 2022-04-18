import { memo } from 'react';

import AddProfiency from 'common/components/add-pattern';

import { useLocation } from 'react-router-dom';
import { ROUTE } from 'common/components/routes/utils/constants';
import SkillList from './components/skills/SkillList';
import { useGetAllSkills } from './lib/query-hooks';

const Skills = function (): JSX.Element {
  // const { state: skills } = useSkillCollectionContext();
  const location = useLocation();
  const { data: skills } = useGetAllSkills();

  return (
    <AddProfiency
      collection={skills || []}
      title="Skill"
    >
      {!location.pathname.includes(ROUTE.EDIT) && <SkillList skills={skills || []} />}
    </AddProfiency>
  );
};

export default memo(Skills);
