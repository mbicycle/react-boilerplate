import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import AddProfiency from 'common/components/add-pattern';
import { ROUTE } from 'common/components/routes/utils/constants';
import CircularSpinner from 'common/components/circular-spinner/circular-spinner';

import SkillList from './components/skills/SkillList';
import { useUserFromDb } from '../personal-information/lib/query-hooks';

const Skills = function (): JSX.Element {
  const location = useLocation();
  const { data } = useUserFromDb();

  if (!data) {
    return <CircularSpinner size="large" color="primary" />;
  }

  return (
    <AddProfiency collection={data.skills || []} title="Skill">
      {!location.pathname.includes(ROUTE.EDIT) && <SkillList skills={data.skills} />}
    </AddProfiency>
  );
};

export default memo(Skills);
