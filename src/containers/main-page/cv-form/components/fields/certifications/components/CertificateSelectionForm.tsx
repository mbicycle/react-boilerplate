import React from 'react';

import {
  Grid, TextField,
} from '@mui/material';

import { useForm } from 'react-hook-form';
import { CERTIFICATE_TITLE } from '../utils/constants';
import { FormControlStyled } from './addedSertificates/styled';
import CalendarStyled from './CalendarStyled';
import ReactHookFormTextFieldOutlined
  from '../../../../../../../common/components/react-hook-forms/ReactHookFormTextFieldOutlined';

interface CertificateSelectionFormProps{
  handleChangeFormTitle: (e:React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeFormDate: (date: Date | string) => void;
  certificateItemValues:{
    name: string;
    id: string | Date;
    link: string;
  }
}

const CertificateSelectionForm = function ({
  handleChangeFormTitle,
  handleChangeFormDate,
  certificateItemValues,
}: CertificateSelectionFormProps):JSX.Element {
  const { control } = useForm();
  return (
    <>
      <Grid item xs={8}>
        <FormControlStyled>
          <ReactHookFormTextFieldOutlined
            {...{
              name: 'name', control, label: CERTIFICATE_TITLE, type: 'text', variant: 'outlined',
            }}
          />
          {/* <TextField */}
          {/*   label={CERTIFICATE_TITLE} */}
          {/*   onChange={handleChangeFormTitle} */}
          {/*   value={certificateItemValues.name} */}
          {/* /> */}
        </FormControlStyled>
      </Grid>
      <Grid item xs={8}>
        <FormControlStyled>
          <CalendarStyled handleChangeFormDate={handleChangeFormDate} />
        </FormControlStyled>
      </Grid>
    </>
  );
};

export default CertificateSelectionForm;
