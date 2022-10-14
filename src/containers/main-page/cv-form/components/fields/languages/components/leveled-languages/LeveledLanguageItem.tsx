import { memo } from 'react';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';

import { useDeleteUserLanguage } from '../../lib/query-hooks';

const LeveledLanguageItem = function ({
  language, level,
}: {language: string, level: string}): JSX.Element {
  const { mutateAsync: deleteBy, isLoading } = useDeleteUserLanguage();

  const onDeleteLanguageHandle = (): void => {
    deleteBy(language);
  };

  return (
    <ProfiencyItem
      headText={language}
      bodyText={level}
      onDelete={onDeleteLanguageHandle}
      isLoading={isLoading}
    />
  );
};

export default memo(LeveledLanguageItem);
