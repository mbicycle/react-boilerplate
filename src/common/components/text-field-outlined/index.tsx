import React, { memo } from 'react';
import { OutlinedTextFieldProps } from '@mui/material';

import { TextFieldStyled } from './styled';

interface TextFieldOulinedProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const TextFieldOulined = function ({
  label, name, onChange, ...rest
}: TextFieldOulinedProps): JSX.Element {
  return (
    <TextFieldStyled
      {...rest}
      value={rest.value}
      $isMultiline={Boolean(rest.multiline)}
      InputLabelProps={{
        style: {
          margin: '-4px 0px',
        },
      }}
      label={label}
      variant="outlined"
      name={name}
      onChange={onChange}
      autoComplete="false"
      fullWidth
    />
  );
};
export default memo(TextFieldOulined);
