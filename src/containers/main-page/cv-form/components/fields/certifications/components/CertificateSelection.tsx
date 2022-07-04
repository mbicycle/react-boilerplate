import { memo, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Grid } from '@mui/material';

import { ButtonStep } from 'containers/main-page/cv-form/utils/constants';

import { Certificate } from 'common/models/User';

import { GridWrapperStyled, SaveButtonWrapperStyled } from '../../languages/utils/styled';
import CertificateSelectionForm from './CertificateSelectionForm';
import { useAddUserCertificate } from '../lib/query-hooks';

const CertificateSelection = function (): JSX.Element {
  const navigate = useNavigate();
  const { mutateAsync: addMyCertificateAsync } = useAddUserCertificate();

  const [isSaveDisabled, setSaveDisabled] = useState(true);
  const [certificateItem, setCertificateItem] = useState<Certificate>({ id: '', name: '', link: '' });

  const onSaveHandle = (): void => {
    addMyCertificateAsync(certificateItem as never);
    navigate('/dashboard/certificates');
  };

  const onGetCertificateHandle = useCallback((certificate: Certificate): void => {
    debugger;
    setSaveDisabled(false);
    setCertificateItem(certificate);
  }, []);

  return (
    <GridWrapperStyled container>
      <Grid
        container
        wrap="nowrap"
        gap={6}
        justifyContent="space-between"
      >
        <CertificateSelectionForm onGetCertificateHandle={onGetCertificateHandle} />
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

export default memo(CertificateSelection);
