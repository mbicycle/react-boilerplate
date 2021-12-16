import { memo, useState } from 'react';

import { Button, Grid } from '@mui/material';

import SelectOutlined from 'common/components/select-outlined';
import { Step } from 'containers/main-page/cv-form/utils/constants';

import LanguageTitle from './LanguageTitle';
import { ButtonText } from './utils/constants';
import { LANGUAGES, LEVELS } from './mock';

import {
  AddCircleIconStyled, ButtonContainer, GridWrapperStyled,
} from './utils/styled';

const Languages = function (): JSX.Element {
  const [pressedAdd, setPressedAdd] = useState(false);

  const onAddLanguage = (): void => {
    setPressedAdd(true);
  };

  return (
    <ButtonContainer>
      {pressedAdd && <LanguageTitle />}
      {!pressedAdd ? (
        <Button variant="contained" onClick={onAddLanguage}>
          <AddCircleIconStyled />
          {ButtonText.Add}
        </Button>
      )
        : (
          <GridWrapperStyled container>
            <Grid container wrap="nowrap" gap={6} justifyContent="space-between">
              <Grid item xs={6}>
                <SelectOutlined
                  collection={LANGUAGES}
                  fieldNameSelector="name"
                  label="Language"
                />
              </Grid>
              <Grid item xs={6}>
                <SelectOutlined
                  collection={LEVELS}
                  fieldNameSelector="name"
                  label="Level"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} paddingTop={6} display="inline-flex" justifyContent="flex-end">
              <Button variant="contained">
                {Step.Save}
              </Button>
            </Grid>
          </GridWrapperStyled>
        )}

    </ButtonContainer>
  );
};

export default memo(Languages);
