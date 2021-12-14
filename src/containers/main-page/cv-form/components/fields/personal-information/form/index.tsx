import { memo } from 'react';

import { FormControl, Grid } from '@mui/material';

import { useForm } from 'common/utils/hooks';
import TextFieldOutlined from 'common/components/text-field-outlined';
import { InputLabel, InputName } from './constants';

const PersonalDataForm = function (): JSX.Element {
  const { handleChange, handleSubmit } = useForm();

  return (
    <FormControl component="form" onSubmit={handleSubmit} autoComplete="off">
      <Grid container direction="row" wrap="nowrap" spacing={6}>
        <Grid item>
          <TextFieldOutlined
            label={InputLabel.FirstName}
            name={InputName.FirstName}
            onChange={handleChange}
          />
          <TextFieldOutlined
            label={InputLabel.LastName}
            name={InputName.LastName}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextFieldOutlined
            label={InputLabel.Email}
            name={InputName.Email}
            onChange={handleChange}
            type="email"
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
    </FormControl>
  );
};

export default memo(PersonalDataForm);
