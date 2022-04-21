import { memo } from 'react';

import type { UserLanguage } from 'common/models/User';

import LeveledLanguageItem from './LeveledLanguageItem';

import { SelectedLanguagesListStyled } from './styled';

const LeveledLanguageList = function ({
  languages,
}: {languages: UserLanguage[]}): JSX.Element {
  return (
    <SelectedLanguagesListStyled>
      {languages.map(({ name, level }) => (
        <LeveledLanguageItem
          key={name}
          id={name}
          language={name}
          level={level}
        />
      ))}
    </SelectedLanguagesListStyled>
  );
};

export default memo(LeveledLanguageList);
