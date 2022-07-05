import React, { useEffect, useState } from 'react';
import {
  Grid, TextField,
} from '@mui/material';
import { FormControlStyled } from '../../languages/utils/styled';
import { CERTIFICATE_TITLE } from '../utils/constants';
import CalendarStyled from './CalendarStyled';
import { Certificate } from '../../../../../../../common/models/User';

interface CertificateSelectionFormProps{
  onGetCertificateHandle: (certificate: Certificate) => void;
}
interface FormValues {
  name: string,
  date: Date | null,
}
const initialState: FormValues = {
  name: '',
  date: null,
};

const CertificateSelectionForm = function ({ onGetCertificateHandle }: CertificateSelectionFormProps):JSX.Element {
  const [formValues, setFormValues] = useState(initialState);

  const handleChangeFormTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({ ...formValues, name: e.target.value });
  };
  const handleChangeFormDate = (date:Date | null): void => {
    setFormValues({ ...formValues, date });
  };
  useEffect(() => { if (formValues.name) onGetCertificateHandle(formValues); }, [onGetCertificateHandle, formValues]);
  return (
    <>
      <Grid item xs={6}>
        <FormControlStyled>
          <TextField label={CERTIFICATE_TITLE} onChange={handleChangeFormTitle} value={formValues.name} />
        </FormControlStyled>
      </Grid>
      <Grid item xs={6}>
        <FormControlStyled>
          <CalendarStyled handleChangeFormDate={handleChangeFormDate} />
        </FormControlStyled>
      </Grid>
    </>

  );
};

export default CertificateSelectionForm;
