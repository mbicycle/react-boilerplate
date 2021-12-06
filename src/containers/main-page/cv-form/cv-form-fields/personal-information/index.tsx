import { TextField, Typography } from '@mui/material';
import React, { memo } from 'react';

const PersonalInformation = function (): JSX.Element {
  return (
    <>
      <Typography variant="h5" fontWeight={600}>
        Personal Information
      </Typography>
      <Typography variant="body1" sx={{ padding: '0.8rem 0 2.4rem 0' }}>
        Any explanation text
      </Typography>
      <TextField label="First Name" />
    </>
  );
};

export default memo(PersonalInformation);
