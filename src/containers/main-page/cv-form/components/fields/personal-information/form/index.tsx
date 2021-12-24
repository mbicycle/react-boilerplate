import { memo } from 'react';

import { Grid } from '@mui/material';

import { useForm } from 'common/utils/hooks';
import TextFieldOutlined from 'common/components/text-field-outlined';
import { useAuth } from 'containers/authentication/auth';

import { InputLabel, InputName } from './constants';

import { FormControlStyled } from './styled';

interface PersonalDataFormType {
firstName: string;
lastName: string;
email: string;
skype: string;
summary: string;
}

const PersonalDataForm = function (): JSX.Element {
  const { handleChange, handleSubmit } = useForm<PersonalDataFormType>();
  const { user } = useAuth();

  return (
    <FormControlStyled onSubmit={handleSubmit}>
      <Grid container direction="row" wrap="nowrap" spacing={6}>
        <Grid item>
          <TextFieldOutlined
            defaultValue={user?.firstName}
            label={InputLabel.FirstName}
            name={InputName.FirstName}
            onChange={handleChange}
          />
          <TextFieldOutlined
            defaultValue={user?.lastName}
            label={InputLabel.LastName}
            name={InputName.LastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextFieldOutlined
            value={user?.email}
            label={InputLabel.Email}
            name={InputName.Email}
            onChange={handleChange}
            type="email"
            disabled
          />
          <TextFieldOutlined
            label={InputLabel.Skype}
            name={InputName.Skype}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <TextFieldOutlined
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
