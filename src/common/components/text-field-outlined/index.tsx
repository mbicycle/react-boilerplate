import { OutlinedTextFieldProps } from '@mui/material';
import { memo } from 'react';
import { TextFieldStyled } from './styled';

interface TextFieldOulinedProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldOulined = function (
  {
    label, name, onChange, ...rest
  }: TextFieldOulinedProps,
): JSX.Element {
  return (
    <TextFieldStyled
      {...rest}
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
      fullWidth
    />
  );
};

export default memo(TextFieldOulined);
