import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Grid } from '@mui/material';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { Language } from 'common/models/Language';

import LanguageSelectionForm from './LanguageSelectionForm';
import { LEVELS } from './utils/constants';

import { useAddUserLanguage, useGetAllLanguages } from '../lib/query-hooks';
import { FormLanguage } from './utils/types';

import { GridWrapperStyled, SaveButtonWrapperStyled } from '../utils/styled';

const LanguageSelection = function (): JSX.Element {
  const navigate = useNavigate();
  const { mutateAsync: addMyLangugeAsync } = useAddUserLanguage();
  const { data } = useGetAllLanguages();

  const [isSaveDisabled, setSaveDisabled] = useState(true);
  const [leveledLanguage, setLeveledLanguage] = useState<FormLanguage>({ name: '', level: '' });

  const onSaveHandle = (): void => {
    addMyLangugeAsync(leveledLanguage as never);
    navigate(-1);
  };

  const onGetSelectedLanguageHandle = useCallback((language: FormLanguage): void => {
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
          languages={data as Language[]}
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
