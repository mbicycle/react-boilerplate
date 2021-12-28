import { memo } from 'react';

import { LeveledLanguageType } from 'containers/main-page/cv-form/local-state/LanguageContext';

import LeveledLanguageItem from './LeveledLanguageItem';

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
