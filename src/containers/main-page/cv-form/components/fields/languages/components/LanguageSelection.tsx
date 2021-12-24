import { memo, useCallback, useState } from 'react';

import { Button, Grid } from '@mui/material';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import { LANGUAGES, LEVELS } from '../mock';

import LanguageSelectionForm from './LanguageSelectionForm';
import { LeveledLanguageType } from '../local-state/LanguageContext';
import { useLanguageContext } from '../local-state/hooks';

import { GridWrapperStyled } from '../utils/styled';

const LanguageSelection = function ({
  onReturn,
}:{onReturn: VoidFunction}): JSX.Element {
  const { dispatch } = useLanguageContext();

  const [isSaveDisabled, setSaveDisabled] = useState(true);
  const [leveledLanguage, setLeveledLanguage] = useState<LeveledLanguageType>({ language: '', level: '' });

  const onSaveHandle = (): void => {
    dispatch({ type: 'add', leveledLanguage });
    // TODO: Implement saving to DB.
    onReturn();
  };

  const onGetSelectedLanguageHandle = useCallback((language: LeveledLanguageType): void => {
    setSaveDisabled(false);
    setLeveledLanguage(language);
  }, []);

  return (
    <GridWrapperStyled container>
      <Grid
        container
        wrap="nowrap"
        gap={6}
        justifyContent="space-between"
      >
        <LanguageSelectionForm
          onGetSelectedLanguage={onGetSelectedLanguageHandle}
          languages={LANGUAGES}
          levels={LEVELS}
        />
      </Grid>
      <Grid
        item
        xs={12}
        paddingTop={6}
        display="inline-flex"
        justifyContent="flex-end"
      >
        <Button
          disabled={isSaveDisabled}
          onClick={onSaveHandle}
          variant="contained"
        >
          {ButtonStep.Save}
        </Button>
      </Grid>
    </GridWrapperStyled>
  );
};

export default memo(LanguageSelection);
