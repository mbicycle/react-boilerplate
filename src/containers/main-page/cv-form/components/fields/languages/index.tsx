import { memo } from 'react';

import AddProfiency from 'common/components/add-pattern';

import CircularSpinner from 'common/components/circular-spinner/circular-spinner';
import LeveledLanguageList from './components/leveled-languages/LeveledLanguageList';

import { useUserFromDb } from '../personal-information/lib/query-hooks';

const Languages = function (): JSX.Element {
  const { data, isLoading } = useUserFromDb();

  if (isLoading) {
    return <CircularSpinner size="large" color="primary" />;
  }

  return (
    <AddProfiency
      collection={data?.languages || []}
      title="Language"
    >
      {!!data?.languages?.length && <LeveledLanguageList languages={data?.languages || []} />}
    </AddProfiency>
  );
};

export default memo(Languages);
