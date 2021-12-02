import { TextField, Typography } from '@mui/material';
import React from 'react';

interface PersonalInformationProps {
    value: { [key: string]: string };
    handleChange: () => void;
}

const PersonalInformation = function ({ value, handleChange }: PersonalInformationProps): JSX.Element {
  return (
    <>
      <Typography variant="h5" fontWeight={600}>
        Personal Information Form Part
      </Typography>
      <Typography variant="body1">
        Any explanation text
      </Typography>
      <TextField
        placeholder="First Name"
        size="small"
        name="firstName"
        value={value.firstName}
        onChange={handleChange}
      />
      <TextField
        placeholder="Last Name"
        size="small"
        name="lastName"
        value={value.lastName}
        onChange={handleChange}
      />
      <TextField
        placeholder="Email"
        size="small"
        name="email"
        value={value.email}
        onChange={handleChange}
      />
      <TextField
        placeholder="Skype"
        size="small"
        name="skype"
        value={value.skype}
        onChange={handleChange}
      />
    </>
  );
};

export default PersonalInformation;
