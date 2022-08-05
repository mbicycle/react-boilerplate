import { memo, useEffect } from 'react';
import { useQueryClient } from 'react-query';

import AddProfiency from 'common/components/add-pattern';

import CircularSpinner from 'common/components/circular-spinner/circular-spinner';
import LeveledLanguageList from './components/leveled-languages/LeveledLanguageList';

import { useUserFromDb } from '../personal-information/lib/query-hooks';
import { QueryKey } from './lib/query-key';
import { getAllLanguages } from './lib/api';

const Languages = function (): JSX.Element {
  const { data, isLoading } = useUserFromDb();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(QueryKey.Languages, getAllLanguages);
  }, [queryClient]);

  if (isLoading) {
    return <CircularSpinner size="large" color="primary" />;
  }

  return (
    <AddProfiency
      collection={data?.languages || []}
      title="Language"
    >
      <LeveledLanguageList languages={data?.languages || []} />
    </AddProfiency>
  );
};

export default memo(Languages);
