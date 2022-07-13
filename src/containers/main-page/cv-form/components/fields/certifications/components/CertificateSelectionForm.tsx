import React, { useEffect, useState } from 'react';
import {
  Grid, TextField,
} from '@mui/material';
import { FormControlStyled, FormControlStyledP4 } from '../../languages/utils/styled';
import { CERTIFICATE_LINK, CERTIFICATE_TITLE } from '../utils/constants';
import CalendarStyled from './CalendarStyled';

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
  return (
    <>
      <Grid item xs={8}>
        <FormControlStyled>
          <TextField
            label={CERTIFICATE_TITLE}
            onChange={handleChangeFormTitle}
            value={certificateItemValues.name}
          />
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
