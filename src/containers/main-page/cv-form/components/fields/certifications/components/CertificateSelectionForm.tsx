import React from 'react';

import { Grid } from '@mui/material';

import ReactHookFormDatePicker
  from 'common/components/react-hook-forms/ReactHookFormDatePicker';
import { Control } from 'react-hook-form';
import { CERTIFICATE_DATE, CERTIFICATE_TITLE } from '../utils/constants';
import { FormControlStyled } from './addedSertificates/styled';
import ReactHookFormTextFieldOutlined
  from '../../../../../../../common/components/react-hook-forms/ReactHookFormTextFieldOutlined';
import { Certificate } from '../../../../../../../common/models/User';

const CertificateSelectionForm = function ({ control }: {control: Control<Certificate>}):JSX.Element {
  return (
    <>
      <Grid item xs={8}>
        <FormControlStyled>
          <ReactHookFormTextFieldOutlined
            {...{
              name: 'name',
              control,
              label: CERTIFICATE_TITLE,
              type: 'text',
              variant: 'outlined',
            }}
          />
        </FormControlStyled>
      </Grid>
      <Grid item xs={8}>
        <FormControlStyled>
          <ReactHookFormDatePicker
            control={control}
            name="id"
            maxDate={new Date()}
            minDate={new Date(1991, 4, 17)}
            label={CERTIFICATE_DATE}
          />
        </FormControlStyled>
      </Grid>
    </>
  );
};

export default CertificateSelectionForm;
