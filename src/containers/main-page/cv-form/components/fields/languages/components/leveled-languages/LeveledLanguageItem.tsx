import { memo } from 'react';

import { useLanguageContext } from 'containers/main-page/cv-form/local-state/hooks';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';

const LeveledLanguageItem = function ({
  language, level,
}: {language: string, level: string}): JSX.Element {
  const { dispatch } = useLanguageContext();

  const onDeleteLanguageHandle = (): void => {
    dispatch(
      {
        type: 'remove',
        leveledLanguage: {
          language,
          level,
        },
      },
    );
  };

  return (
    <ProfiencyItem
      headText={language}
      bodyText={level}
      onDelete={onDeleteLanguageHandle}
    />
  );
};

export default memo(LeveledLanguageItem);
