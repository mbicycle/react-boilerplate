import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import { Button, Grid } from '@mui/material';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';
import { Certificate } from 'common/models/User';
import {
  FormControlStyledP4, GridWrapperStyled, SaveButtonWrapperStyled,
} from './addedSertificates/styled';
import CertificateSelectionForm from './CertificateSelectionForm';
import { useAddUserCertificate } from '../lib/query-hooks';
import { CERTIFICATE_LINK, INVALID_DATE } from '../utils/constants';
import ReactHookFormTextFieldOutlined
  from '../../../../../../../common/components/react-hook-forms/ReactHookFormTextFieldOutlined';

const CertificateSelection = function (): JSX.Element {
  const [isDisable, setIsDisable] = useState(true);
  const { handleSubmit, control, getValues } = useForm<Certificate>();
  const navigate = useNavigate();
  const { mutateAsync: addMyCertificateAsync } = useAddUserCertificate();

  const onSaveHandle: SubmitHandler<Certificate> = (cert): void => {
    navigate('/dashboard/certificates');
    addMyCertificateAsync(cert as never);
  };

  const handleDisableBtn = ():void => {
    const certificate = getValues();
    if (certificate.name
      && certificate.link
      && certificate.id
      && dayjs(certificate.id).format('DD.MM.YYYY') !== INVALID_DATE) {
      return setIsDisable(false);
    }
    return setIsDisable(true);
  };
  return (
    <form
      onSubmit={handleSubmit((data) => onSaveHandle(data))}
      onChange={handleDisableBtn}
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
            disabled={isDisable}
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
