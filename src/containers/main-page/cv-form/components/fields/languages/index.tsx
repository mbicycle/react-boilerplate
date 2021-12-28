import { memo } from 'react';

import AddProfiency from 'common/components/add-pattern';
import { useLanguageContext } from 'containers/main-page/cv-form/local-state/hooks';

import LeveledLanguageList from './components/leveled-languages/LeveledLanguageList';

const Languages = function (): JSX.Element {
  const { state: leveledLanguages } = useLanguageContext();

  return (
    <AddProfiency
      collection={leveledLanguages}
      title="Language"
    >
      {
        leveledLanguages.length
          ? <LeveledLanguageList languages={leveledLanguages} />
          : null
      }
    </AddProfiency>
  );
};

export default memo(Languages);
