import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import { Button, Grid } from '@mui/material';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { Certificate } from 'common/models/User';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  FormControlStyledP4, GridWrapperStyled, SaveButtonWrapperStyled,
} from './addedSertificates/styled';
import CertificateSelectionForm from './CertificateSelectionForm';
import { useAddUserCertificate } from '../lib/query-hooks';
import { CERTIFICATE_LINK, INVALID_DATE } from '../utils/constants';
import ReactHookFormTextFieldOutlined
  from '../../../../../../../common/components/react-hook-forms/ReactHookFormTextFieldOutlined';

const schema = yup.object({
  name: yup.string().required(),
  link: yup.string().required(),
  id: yup.date().required(),
}).required();

const CertificateSelection = function (): JSX.Element {
  const {
    handleSubmit, control, getValues, formState: { isValid },
  } = useForm<Certificate>({ mode: 'onChange', resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const { mutateAsync: addMyCertificateAsync } = useAddUserCertificate();
  const onSaveHandle: SubmitHandler<Certificate> = (cert): void => {
    navigate('/dashboard/certificates');
    addMyCertificateAsync(cert as never);
  };

  return (
    <form
      onSubmit={handleSubmit(onSaveHandle)}
      // onChange={handleSubmit(handleDisableBtn)}
      // onBlur={handleSubmit(handleDisableBtn)}
    >
      <GridWrapperStyled container>
        <Grid
          container
          wrap="nowrap"
          gap={6}
          justifyContent="space-between"
        >
          <CertificateSelectionForm control={control} />
        </Grid>
        <FormControlStyledP4>
          <ReactHookFormTextFieldOutlined
            {...{
              name: 'link', control, label: CERTIFICATE_LINK, type: 'text', variant: 'outlined',
            }}
          />
        </FormControlStyledP4>
        <SaveButtonWrapperStyled item>
          <Button
            disabled={!isValid}
            type="submit"
            variant="contained"
          >
            {ButtonStep.Save}
          </Button>
        </SaveButtonWrapperStyled>
      </GridWrapperStyled>
    </form>
  );
};

export default memo(CertificateSelection);
