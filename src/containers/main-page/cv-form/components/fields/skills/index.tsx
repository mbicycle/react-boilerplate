import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import AddProfiency from 'common/components/add-pattern';
import { ROUTE } from 'common/components/routes/utils/constants';
import CircularSpinner from 'common/components/circular-spinner/circular-spinner';

import CategoryList from './components/skills/CategoryList';
import { useUserFromDb } from '../personal-information/lib/query-hooks';

const Categories = function (): JSX.Element {
  const location = useLocation();
  const { data } = useUserFromDb();

  if (!data) {
    return <CircularSpinner size="large" color="primary" />;
  }

  return (
    <AddProfiency collection={data.categories || []} title="Skill">
      {!location.pathname.includes(ROUTE.EDIT) && <CategoryList categories={data.categories} />}
    </AddProfiency>
  );
};

export default memo(Categories);
