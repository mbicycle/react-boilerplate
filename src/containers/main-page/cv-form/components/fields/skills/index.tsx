import { memo } from 'react';

import { useLanguageContext } from 'containers/main-page/cv-form/local-state/hooks';
import AddProfiency from 'common/components/add-pattern';

import LeveledLanguageList from '../languages/components/leveled-languages/LeveledLanguageList';

const Skills = function (): JSX.Element {
  const { state: leveledLanguages } = useLanguageContext();

  return (
    <AddProfiency
      collection={leveledLanguages}
      titleName="Language"
    >
      {
        leveledLanguages.length
          ? <LeveledLanguageList languages={leveledLanguages} />
          : null
      }
    </AddProfiency>
  );
};

export default memo(Skills);
