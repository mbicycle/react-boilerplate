import React, {
  memo, useCallback, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Grid, TextField } from '@mui/material';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import { Certificate } from 'common/models/User';

import dayjs from 'dayjs';
import { FormControlStyledP4, GridWrapperStyled, SaveButtonWrapperStyled } from '../../languages/utils/styled';
import CertificateSelectionForm from './CertificateSelectionForm';
import { useAddUserCertificate } from '../lib/query-hooks';
import { CERTIFICATE_LINK } from '../utils/constants';

const CertificateSelection = function (): JSX.Element {
  const navigate = useNavigate();
  const { mutateAsync: addMyCertificateAsync } = useAddUserCertificate();

  const [isSaveDisabled, setSaveDisabled] = useState(true);
  const [certificateItemValues, setCertificateItem] = useState<Certificate>({
    id: '',
    name: '',
    link: '',
  });
  const onSaveHandle = (): void => {
    navigate('/dashboard/certificates');
    addMyCertificateAsync(certificateItemValues as never);
  };

  const handleChangeFormTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCertificateItem({ ...certificateItemValues, name: e.target.value });
  };
  const handleChangeFormDate = (id:Date | null): void => {
    setCertificateItem({ ...certificateItemValues, id: id ? dayjs(id).format('DD.MM.YYYY') : null });
  };
  const handleChangeFormLink = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCertificateItem({ ...certificateItemValues, link: e.target.value });
  };

  const handleDisableBtn = (certificate: Certificate):void => {
    if (certificate.name && certificate.link) {
      setSaveDisabled(false);
    } else {
      setSaveDisabled(true);
    }
  };
  const onGetCertificateHandle = useCallback((certificate: Certificate): void => {
    handleDisableBtn(certificate);
    setCertificateItem(certificate);
  }, []);
  useEffect(
    () => {
      if (certificateItemValues.name) onGetCertificateHandle(certificateItemValues);
    },
    [onGetCertificateHandle, certificateItemValues],
  );
  return (
    <GridWrapperStyled container>
      <Grid
        container
        wrap="nowrap"
        gap={6}
        justifyContent="space-between"
      >
        <CertificateSelectionForm
          certificateItemValues={certificateItemValues}
          handleChangeFormTitle={handleChangeFormTitle}
          handleChangeFormDate={handleChangeFormDate}
        />
      </Grid>
      <FormControlStyledP4>
        <TextField
          label={CERTIFICATE_LINK}
          onChange={handleChangeFormLink}
          value={certificateItemValues.link}
        />
      </FormControlStyledP4>
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

export default memo(CertificateSelection);
