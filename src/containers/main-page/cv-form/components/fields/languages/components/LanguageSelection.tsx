import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Grid } from '@mui/material';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import { UserLanguage } from 'common/models/User';
import LanguageSelectionForm from './LanguageSelectionForm';

import { useAddUserLanguage } from '../lib/query-hooks';

import { GridWrapperStyled, SaveButtonWrapperStyled } from '../utils/styled';

const LanguageSelection = function (): JSX.Element {
  const navigate = useNavigate();
  const { mutateAsync: addMyLangugeAsync } = useAddUserLanguage();

  const [isSaveDisabled, setSaveDisabled] = useState(true);
  const [leveledLanguage, setLeveledLanguage] = useState<UserLanguage>({ name: '', level: '' });

  const onSaveHandle = (): void => {
    addMyLangugeAsync(leveledLanguage as never);
    navigate('/dashboard/languages');
  };

  const onGetSelectedLanguageHandle = useCallback((language: UserLanguage): void => {
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
