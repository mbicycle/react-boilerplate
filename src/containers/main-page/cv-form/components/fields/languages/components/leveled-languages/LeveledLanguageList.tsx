import { memo } from 'react';

import { v4 as uuidv4 } from 'uuid';

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
          key={uuidv4()}
          language={name}
          level={level}
        />
      ))}
    </SelectedLanguagesListStyled>
  );
};

export default memo(LeveledLanguageList);
