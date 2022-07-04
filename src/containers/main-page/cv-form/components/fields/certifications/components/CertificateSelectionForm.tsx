import React, { useEffect, useState } from 'react';
import {
  Grid, InputLabel, MenuItem, Select, TextField,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { FormControlStyled, MenuItemText } from '../../languages/utils/styled';
import { LANGUAGE, LanguageInputName, LEVEL } from '../../languages/utils/constants';
import { SearchPaperStyled } from '../../languages/components/utils/styled';
import TextFieldOutlined from '../../../../../../../common/components/text-field-outlined';
import { ADD_INPUT_LANGUAGE_NAME, LEVELS as levels } from '../../languages/components/utils/constants';
import { CERTIFICATE_TITLE } from '../utils/constants';
import CalendarStyled from './CalendarStyled';
import { useForm } from '../../../../../../../common/utils/hooks';
import { Certificate, UserLanguage } from '../../../../../../../common/models/User';

interface CertificateSelectionFormProps{
  onGetCertificateHandle: (certificate: Certificate) => void;
}

const CertificateSelectionForm = function ({ onGetCertificateHandle }: CertificateSelectionFormProps):JSX.Element {
  const { values, handleChange } = useForm<Certificate>({ name: '', link: '', id: '' });
  console.log(values);
  useEffect(() => { if (values.name) onGetCertificateHandle(values); }, [onGetCertificateHandle, values]);
  return (
    <>
      <Grid item xs={6}>
        <FormControlStyled>
          <TextField label={CERTIFICATE_TITLE} onChange={handleChange} value={values.name} />
        </FormControlStyled>
      </Grid>
      <Grid item xs={6}>
        <FormControlStyled>
          <CalendarStyled />
        </FormControlStyled>
      </Grid>
    </>

  );
};

export default CertificateSelectionForm;
