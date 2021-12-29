import { memo } from 'react';

import { useLanguageContext } from 'containers/main-page/cv-form/local-state/hooks';
import AddProfiency from 'common/components/add-pattern';

import LeveledLanguageList from '../languages/components/leveled-languages/LeveledLanguageList';
import { TOOLS } from './utils/constants';

const Skills = function (): JSX.Element {
  const { state: leveledLanguages } = useLanguageContext();

  return (
    <AddProfiency
      collection={TOOLS}
      title="Skill"
    >
      {
        TOOLS.length
          ? <LeveledLanguageList languages={leveledLanguages} />
          : null
      }
    </AddProfiency>
  );
};

export default memo(Skills);
