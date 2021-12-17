import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Grid } from '@mui/material';

import SelectOutlined from 'common/components/select-outlined';
import { ROUTE } from 'common/components/routes/utils/constants';
import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { useFormData } from 'containers/main-page/cv-form/local-state/hooks';

import { LANGUAGES, LEVELS } from './mock';

import { GridWrapperStyled } from './utils/styled';

const LanguageSelection = function (): JSX.Element {
  const { dispatch } = useFormData();
  const navigate = useNavigate();

  const onSaveHandle = (): void => {
    navigate(ROUTE.DASHBOARD.SKILLS);
    dispatch({ type: 'next' });
  };

  return (
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
        <Button onClick={onSaveHandle} variant="contained">
          {ButtonStep.Save}
        </Button>
      </Grid>
    </GridWrapperStyled>
  );
};

export default memo(LanguageSelection);
