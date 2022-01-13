import { memo } from 'react';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';

import { useDeleteUserLanguage } from '../../lib/query-hooks';

const LeveledLanguageItem = function ({
  language, level, id,
}: {language: string, level: string, id: string}): JSX.Element {
  const { mutateAsync: deleteBy } = useDeleteUserLanguage();

  const onDeleteLanguageHandle = (): void => {
    deleteBy(id);
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
