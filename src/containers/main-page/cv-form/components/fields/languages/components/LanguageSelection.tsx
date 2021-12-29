import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Grid } from '@mui/material';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { useLanguageContext } from 'containers/main-page/cv-form/local-state/hooks';

import { LANGUAGES, LEVELS } from '../mock';

import LanguageSelectionForm from './LanguageSelectionForm';
import { LeveledLanguageType } from '../../../../local-state/LanguageContext';

import { GridWrapperStyled, SaveButtonWrapperStyled } from '../utils/styled';

const LanguageSelection = function (): JSX.Element {
  const { dispatch } = useLanguageContext();
  const navigate = useNavigate();

  const [isSaveDisabled, setSaveDisabled] = useState(true);
  const [leveledLanguage, setLeveledLanguage] = useState<LeveledLanguageType>({ language: '', level: '' });

  const onSaveHandle = (): void => {
    dispatch({ type: 'add', leveledLanguage });
    // TODO: Implement saving to DB.
    navigate(-1);
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
      <SaveButtonWrapperStyled item>
        <Button
          disabled={isSaveDisabled}
          onClick={onSaveHandle}
          variant="contained"
        >
          {ButtonStep.Save}
        </Button>
      </SaveButtonWrapperStyled>
    </GridWrapperStyled>
  );
};

export default memo(LanguageSelection);
