import { memo } from 'react';

import { Grid } from '@mui/material';

import TextFieldOutlined from 'common/components/text-field-outlined';

import CircularSpinner from 'common/components/circular-spinner/circular-spinner';

import { InputLabel, InputName } from './constants';
import { useUpdatePersonalData } from './hooks';

import { FormControlStyled } from './styled';

const PersonalDataForm = function (): JSX.Element {
  const { user, dbUser, handleChange } = useUpdatePersonalData();

  if (!dbUser) {
    return <CircularSpinner size="large" color="primary" />;
  }

  return (
    <FormControlStyled>
      <Grid container direction="row" wrap="nowrap" spacing={6}>
        <Grid item>
          <TextFieldOutlined
            defaultValue={user?.givenName}
            label={InputLabel.FirstName}
            name={InputName.FirstName}
            onChange={handleChange}
            disabled
          />
          <TextFieldOutlined
            defaultValue={user?.surname}
            label={InputLabel.LastName}
            name={InputName.LastName}
            onChange={handleChange}
            disabled
          />
        </Grid>
        <Grid item>
          <TextFieldOutlined
            value={user?.mail}
            label={InputLabel.Email}
            name={InputName.Email}
            onChange={handleChange}
            type="email"
            disabled
          />
          <TextFieldOutlined
            defaultValue={dbUser.skype}
            inputMode="text"
            label={InputLabel.Skype}
            name={InputName.Skype}
            onChange={handleChange}
            type="text"
          />
        </Grid>
      </Grid>
      <TextFieldOutlined
        defaultValue={dbUser.summary}
        label={InputLabel.Summary}
        name={InputName.Summary}
        onChange={handleChange}
        fullWidth
        multiline
        rows={6}
      />
    </FormControlStyled>
  );
};

export default memo(PersonalDataForm);
