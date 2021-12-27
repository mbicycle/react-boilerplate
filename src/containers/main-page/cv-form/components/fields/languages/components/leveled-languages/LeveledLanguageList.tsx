import { memo } from 'react';
import LeveledLanguageItem from './LeveledLanguageItem';
import { LeveledLanguageType } from '../../../../../local-state/LanguageContext';

import { SelectedLanguagesListStyled } from './styled';

const LeveledLanguageList = function ({
  languages,
}: {languages: LeveledLanguageType[]}): JSX.Element {
  return (
    <SelectedLanguagesListStyled>
      {languages.map(({ language, level }) => (
        <LeveledLanguageItem
          key={language}
          language={language}
          level={level}
        />
      ))}
    </SelectedLanguagesListStyled>
  );
};

export default memo(LeveledLanguageList);
