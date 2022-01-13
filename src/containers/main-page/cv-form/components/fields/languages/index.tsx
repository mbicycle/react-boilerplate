import { memo } from 'react';

import AddProfiency from 'common/components/add-pattern';

import LeveledLanguageList from './components/leveled-languages/LeveledLanguageList';
import { useGetUserLanguages } from './lib/query-hooks';

const Languages = function (): JSX.Element {
  const { data: usersLanguages } = useGetUserLanguages();

  return (
    <AddProfiency
      collection={usersLanguages || []}
      title="Language"
    >
      {
        usersLanguages?.length
          ? <LeveledLanguageList languages={usersLanguages || []} />
          : null
      }
    </AddProfiency>
  );
};

export default memo(Languages);
