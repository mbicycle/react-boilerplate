import { memo } from 'react';

import { UserLanguage } from 'common/models/UserLanguage';

import LeveledLanguageItem from './LeveledLanguageItem';

import { SelectedLanguagesListStyled } from './styled';

const LeveledLanguageList = function ({
  languages,
}: {languages: UserLanguage[]}): JSX.Element {
  return (
    <SelectedLanguagesListStyled>
      {languages.map(({ name, level, _id }) => (
        <LeveledLanguageItem
          key={name}
          id={_id}
          language={name}
          level={level}
        />
      ))}
    </SelectedLanguagesListStyled>
  );
};

export default memo(LeveledLanguageList);
